#!/usr/bin/env node

/**
 * Performance Consistency Audit for BeeMobiel
 * Checks for consistent animation timings, image optimization, and loading patterns
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

console.log('⚡ Running performance consistency audit...')

class PerformanceAuditor {
  constructor() {
    this.issues = []
    this.componentsPath = path.join(process.cwd(), 'components')
  }

  audit() {
    console.log('🔍 Analyzing components for performance consistency...')
    
    const componentFiles = glob.sync('**/*.tsx', { cwd: this.componentsPath })
    
    for (const file of componentFiles) {
      this.auditFile(path.join(this.componentsPath, file), file)
    }
    
    this.generateReport()
  }

  auditFile(filePath, fileName) {
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Check animation timing consistency
    this.checkAnimationTimings(content, fileName)
    
    // Check image optimization patterns
    this.checkImageOptimization(content, fileName)
    
    // Check loading state consistency
    this.checkLoadingStates(content, fileName)
    
    // Check transition performance
    this.checkTransitionPerformance(content, fileName)
  }

  checkAnimationTimings(content, fileName) {
    // Check for inconsistent duration values
    const durationMatches = content.match(/duration-\\d+/g) || []
    const uniqueDurations = [...new Set(durationMatches)]
    
    if (uniqueDurations.length > 2) {
      this.issues.push({
        type: 'animation',
        severity: 'medium',
        file: fileName,
        issue: \`Multiple animation durations found: \${uniqueDurations.join(', ')}\`,
        recommendation: 'Use consistent duration-300 for standard, duration-500 for premium animations'
      })
    }

    // Check for performance-heavy animations
    const heavyAnimations = [
      'animate-bounce',
      'animate-spin',
      'animate-ping',
      'animate-pulse'
    ]
    
    for (const animation of heavyAnimations) {
      if (content.includes(animation) && !content.includes('hover:')) {
        this.issues.push({
          type: 'performance',
          severity: 'high',
          file: fileName,
          issue: \`Continuous animation '\${animation}' may impact performance\`,
          recommendation: 'Consider using hover states or reducing animation frequency'
        })
      }
    }
  }

  checkImageOptimization(content, fileName) {
    // Check for Next.js Image usage
    if (content.includes('<img') && !content.includes('next/image')) {
      this.issues.push({
        type: 'image',
        severity: 'high',
        file: fileName,
        issue: 'Using <img> tag instead of Next.js Image component',
        recommendation: 'Use Next.js Image component for automatic optimization'
      })
    }

    // Check for missing loading attributes
    const imageMatches = content.match(/<Image[^>]*>/g) || []
    for (const imageTag of imageMatches) {
      if (!imageTag.includes('loading=') && !imageTag.includes('priority')) {
        this.issues.push({
          type: 'image',
          severity: 'medium',
          file: fileName,
          issue: 'Image missing loading strategy',
          recommendation: 'Add loading="lazy" or priority={true} for above-fold images'
        })
      }
      
      if (!imageTag.includes('sizes=')) {
        this.issues.push({
          type: 'image',
          severity: 'medium',
          file: fileName,
          issue: 'Image missing sizes attribute',
          recommendation: 'Add sizes attribute for responsive image optimization'
        })
      }
    }
  }

  checkLoadingStates(content, fileName) {
    // Check for consistent loading patterns
    if (content.includes('isSubmitting') || content.includes('loading')) {
      if (!content.includes('disabled') || !content.includes('cursor-wait')) {
        this.issues.push({
          type: 'loading',
          severity: 'medium',
          file: fileName,
          issue: 'Incomplete loading state implementation',
          recommendation: 'Add disabled state and cursor-wait for loading buttons'
        })
      }
    }
  }

  checkTransitionPerformance(content, fileName) {
    // Check for transition-all usage
    const transitionAllCount = (content.match(/transition-all/g) || []).length
    if (transitionAllCount > 5) {
      this.issues.push({
        type: 'transition',
        severity: 'low',
        file: fileName,
        issue: \`Heavy use of transition-all (\${transitionAllCount} instances)\`,
        recommendation: 'Consider specific transitions for better performance'
      })
    }

    // Check for transform usage without will-change
    if (content.includes('hover:scale-') && !content.includes('will-change')) {
      this.issues.push({
        type: 'transform',
        severity: 'low',
        file: fileName,
        issue: 'Transform animations without will-change optimization',
        recommendation: 'Consider adding will-change-transform for smoother animations'
      })
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
      recommendations: [],
      issues: this.issues
    }

    // Count issues by type and severity
    this.issues.forEach(issue => {
      report.issuesByType[issue.type] = (report.issuesByType[issue.type] || 0) + 1
      report.issuesBySeverity[issue.severity]++
    })

    // Generate top recommendations
    if (report.issuesBySeverity.high > 0) {
      report.recommendations.push('🚨 High priority: Fix performance-impacting issues first')
    }
    if (report.issuesByType.image > 0) {
      report.recommendations.push('🖼️ Image optimization: Ensure all images use Next.js Image component')
    }
    if (report.issuesByType.animation > 0) {
      report.recommendations.push('⚡ Animation consistency: Standardize animation durations')
    }

    // Write report
    fs.writeFileSync('performance-audit-report.json', JSON.stringify(report, null, 2))
    
    // Console output
    console.log('\\n📊 Performance Audit Results:')
    console.log(\`Total issues found: \${report.totalIssues}\`)
    console.log(\`High priority: \${report.issuesBySeverity.high}\`)
    console.log(\`Medium priority: \${report.issuesBySeverity.medium}\`)
    console.log(\`Low priority: \${report.issuesBySeverity.low}\`)
    
    if (report.totalIssues === 0) {
      console.log('✅ No performance consistency issues found!')
    } else {
      console.log('\\n🔧 Top recommendations:')
      report.recommendations.forEach(rec => console.log(\`   \${rec}\`))
      console.log('\\n📄 Full report saved to: performance-audit-report.json')
    }
    
    return report.totalIssues === 0
  }
}

// Run audit
const auditor = new PerformanceAuditor()
const success = auditor.audit()

process.exit(success ? 0 : 1)

