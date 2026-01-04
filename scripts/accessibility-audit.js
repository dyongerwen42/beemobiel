#!/usr/bin/env node

/**
 * Accessibility Consistency Audit for BeeMobiel
 * Ensures uniform ARIA patterns, keyboard navigation, and focus states
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

console.log('♿ Running accessibility consistency audit...')

class AccessibilityAuditor {
  constructor() {
    this.issues = []
    this.componentsPath = path.join(process.cwd(), 'components')
  }

  audit() {
    console.log('🔍 Analyzing components for accessibility consistency...')
    
    const componentFiles = glob.sync('**/*.tsx', { cwd: this.componentsPath })
    
    for (const file of componentFiles) {
      this.auditFile(path.join(this.componentsPath, file), file)
    }
    
    this.generateReport()
  }

  auditFile(filePath, fileName) {
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Check ARIA patterns
    this.checkAriaPatterns(content, fileName)
    
    // Check keyboard navigation
    this.checkKeyboardNavigation(content, fileName)
    
    // Check focus states
    this.checkFocusStates(content, fileName)
    
    // Check semantic HTML
    this.checkSemanticHTML(content, fileName)
    
    // Check color contrast considerations
    this.checkColorContrast(content, fileName)
  }

  checkAriaPatterns(content, fileName) {
    // Check for buttons without proper ARIA
    const buttonMatches = content.match(/<button[^>]*>/g) || []
    for (const button of buttonMatches) {
      if (!button.includes('aria-label') && !button.includes('aria-describedby')) {
        // Check if button has visible text content
        const buttonContent = content.substring(
          content.indexOf(button) + button.length,
          content.indexOf('</button>', content.indexOf(button))
        )
        
        if (!buttonContent.trim() || buttonContent.includes('svg')) {
          this.issues.push({
            type: 'aria',
            severity: 'high',
            file: fileName,
            issue: 'Button without accessible label',
            recommendation: 'Add aria-label for icon-only buttons or ensure visible text content'
          })
        }
      }
    }

    // Check form inputs
    const inputMatches = content.match(/<input[^>]*>/g) || []
    for (const input of inputMatches) {
      if (!input.includes('aria-label') && !input.includes('id=')) {
        this.issues.push({
          type: 'forms',
          severity: 'high',
          file: fileName,
          issue: 'Form input without proper labeling',
          recommendation: 'Add id attribute and associated label, or aria-label'
        })
      }
      
      if (input.includes('required') && !input.includes('aria-required')) {
        this.issues.push({
          type: 'forms',
          severity: 'medium',
          file: fileName,
          issue: 'Required input missing aria-required',
          recommendation: 'Add aria-required="true" for required fields'
        })
      }
    }

    // Check for error states
    if (content.includes('error') && !content.includes('aria-invalid')) {
      this.issues.push({
        type: 'forms',
        severity: 'high',
        file: fileName,
        issue: 'Error states without aria-invalid',
        recommendation: 'Add aria-invalid="true" and aria-describedby for error states'
      })
    }
  }

  checkKeyboardNavigation(content, fileName) {
    // Check for custom interactive elements
    const interactiveElements = ['onClick', 'onKeyDown', 'onFocus']
    
    for (const handler of interactiveElements) {
      if (content.includes(handler) && !content.includes('tabIndex')) {
        // Check if it's not already on a focusable element
        const lines = content.split('\\n')
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i]
          if (line.includes(handler)) {
            const element = line.match(/<(\\w+)/)?.[1]
            if (!['button', 'a', 'input', 'select', 'textarea'].includes(element)) {
              this.issues.push({
                type: 'keyboard',
                severity: 'high',
                file: fileName,
                issue: \`Interactive \${element} element without keyboard support\`,
                recommendation: 'Add tabIndex and onKeyDown handler for keyboard accessibility'
              })
            }
          }
        }
      }
    }
  }

  checkFocusStates(content, fileName) {
    // Check for consistent focus ring patterns
    const focusRings = content.match(/focus:ring-\\d+/g) || []
    const uniqueRings = [...new Set(focusRings)]
    
    if (uniqueRings.length > 2) {
      this.issues.push({
        type: 'focus',
        severity: 'medium',
        file: fileName,
        issue: \`Inconsistent focus ring styles: \${uniqueRings.join(', ')}\`,
        recommendation: 'Use consistent focus:ring-2 pattern across all focusable elements'
      })
    }

    // Check for focus:outline-none without replacement
    if (content.includes('focus:outline-none') && !content.includes('focus:ring')) {
      this.issues.push({
        type: 'focus',
        severity: 'high',
        file: fileName,
        issue: 'focus:outline-none without focus ring replacement',
        recommendation: 'Always provide visible focus indicator when removing default outline'
      })
    }
  }

  checkSemanticHTML(content, fileName) {
    // Check for proper heading hierarchy
    const headings = content.match(/<h[1-6]/g) || []
    if (headings.length > 0) {
      const headingLevels = headings.map(h => parseInt(h.charAt(2)))
      for (let i = 1; i < headingLevels.length; i++) {
        if (headingLevels[i] - headingLevels[i-1] > 1) {
          this.issues.push({
            type: 'semantic',
            severity: 'medium',
            file: fileName,
            issue: 'Heading hierarchy skip detected',
            recommendation: 'Ensure headings follow logical order (h1 → h2 → h3, etc.)'
          })
          break
        }
      }
    }

    // Check for proper list markup
    if (content.includes('•') || content.includes('- ')) {
      if (!content.includes('<ul>') && !content.includes('<ol>')) {
        this.issues.push({
          type: 'semantic',
          severity: 'medium',
          file: fileName,
          issue: 'List content not using proper HTML list elements',
          recommendation: 'Use <ul>/<ol> and <li> elements for list content'
        })
      }
    }
  }

  checkColorContrast(content, fileName) {
    // Check for potentially low contrast combinations
    const lowContrastPatterns = [
      'text-gray-400',
      'text-yellow-300',
      'text-gray-300'
    ]

    for (const pattern of lowContrastPatterns) {
      if (content.includes(pattern) && !content.includes('placeholder')) {
        this.issues.push({
          type: 'contrast',
          severity: 'medium',
          file: fileName,
          issue: \`Potentially low contrast text: \${pattern}\`,
          recommendation: 'Verify color contrast meets WCAG AA standards (4.5:1 ratio)'
        })
      }
    }

    // Check for color-only information
    if (content.includes('text-red') || content.includes('text-green')) {
      if (!content.includes('✓') && !content.includes('✗') && !content.includes('icon')) {
        this.issues.push({
          type: 'contrast',
          severity: 'low',
          file: fileName,
          issue: 'Information conveyed by color only',
          recommendation: 'Consider adding icons or text to supplement color information'
        })
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalIssues: this.issues.length,
      issuesByType: {},
      issuesBySeverity: {
        high: 0,
        medium: 0,
        low: 0
      },
      complianceScore: 0,
      recommendations: [],
      issues: this.issues
    }

    // Count issues by type and severity
    this.issues.forEach(issue => {
      report.issuesByType[issue.type] = (report.issuesByType[issue.type] || 0) + 1
      report.issuesBySeverity[issue.severity]++
    })

    // Calculate compliance score (higher is better)
    const totalComponents = glob.sync('**/*.tsx', { cwd: this.componentsPath }).length
    const highIssueWeight = 10
    const mediumIssueWeight = 5
    const lowIssueWeight = 1
    
    const issueScore = 
      report.issuesBySeverity.high * highIssueWeight +
      report.issuesBySeverity.medium * mediumIssueWeight +
      report.issuesBySeverity.low * lowIssueWeight

    report.complianceScore = Math.max(0, 100 - (issueScore / totalComponents))

    // Generate recommendations
    if (report.issuesBySeverity.high > 0) {
      report.recommendations.push('🚨 High priority: Fix accessibility barriers immediately')
    }
    if (report.issuesByType.aria > 0) {
      report.recommendations.push('🏷️ ARIA: Add proper labels and descriptions')
    }
    if (report.issuesByType.keyboard > 0) {
      report.recommendations.push('⌨️ Keyboard: Ensure all interactive elements are keyboard accessible')
    }
    if (report.issuesByType.focus > 0) {
      report.recommendations.push('🎯 Focus: Provide consistent, visible focus indicators')
    }

    // Write report
    fs.writeFileSync('accessibility-audit-report.json', JSON.stringify(report, null, 2))
    
    // Console output
    console.log('\\n♿ Accessibility Audit Results:')
    console.log(\`Total issues found: \${report.totalIssues}\`)
    console.log(\`Compliance Score: \${report.complianceScore.toFixed(1)}/100\`)
    console.log(\`High priority: \${report.issuesBySeverity.high}\`)
    console.log(\`Medium priority: \${report.issuesBySeverity.medium}\`)
    console.log(\`Low priority: \${report.issuesBySeverity.low}\`)
    
    if (report.totalIssues === 0) {
      console.log('✅ No accessibility issues found!')
    } else {
      console.log('\\n🔧 Top recommendations:')
      report.recommendations.forEach(rec => console.log(\`   \${rec}\`))
      console.log('\\n📄 Full report saved to: accessibility-audit-report.json')
    }
    
    return report.complianceScore >= 80 // 80+ is passing
  }
}

// Run audit
const auditor = new AccessibilityAuditor()
const success = auditor.audit()

process.exit(success ? 0 : 1)

