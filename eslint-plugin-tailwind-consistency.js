/**
 * Custom ESLint Plugin for BeeMobiel Tailwind CSS Consistency
 * Enforces consistent styling patterns across components
 */

module.exports = {
  rules: {
    'button-padding-order': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Enforce px before py in button className for consistency',
          category: 'Stylistic Issues',
          recommended: true
        },
        fixable: 'code',
        schema: []
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className' && node.value?.type === 'Literal') {
              const classNames = node.value.value;
              const buttonPattern = /(?:bg-yellow|bg-gray).*(?:button|btn|Link.*href)/;
              const wrongOrderPattern = /py-\d+.*px-\d+/;
              
              if (buttonPattern.test(classNames) && wrongOrderPattern.test(classNames)) {
                context.report({
                  node,
                  message: 'Button classes should have px before py for consistency (px-[...] py-[...])',
                  fix(fixer) {
                    const fixed = classNames.replace(
                      /(py-[\w\[\]]+.*?)(px-[\w\[\]]+)/g,
                      '$2 $1'
                    );
                    return fixer.replaceText(node.value, `"${fixed}"`);
                  }
                });
              }
            }
          }
        };
      }
    },
    
    'standard-button-classes': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce standard button class patterns',
          category: 'Best Practices'
        },
        schema: []
      },
      create(context) {
        const standardPrimary = 'px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4';
        const standardSecondary = 'bg-gray-900 text-white';
        
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className' && node.value?.type === 'Literal') {
              const classNames = node.value.value;
              
              // Check for button patterns
              if (classNames.includes('bg-yellow-600')) {
                if (!classNames.includes('text-gray-900')) {
                  context.report({
                    node,
                    message: 'Primary buttons should use text-gray-900, not text-black'
                  });
                }
                
                if (!classNames.includes('font-bold') && !classNames.includes('font-black')) {
                  context.report({
                    node,
                    message: 'Buttons should have consistent font-weight (font-bold recommended)'
                  });
                }
              }
            }
          }
        };
      }
    },
    
    'card-padding-complexity': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Prevent overly complex padding patterns in cards',
          category: 'Performance'
        },
        schema: []
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className' && node.value?.type === 'Literal') {
              const classNames = node.value.value;
              
              // Count padding breakpoints
              const paddingBreakpoints = (classNames.match(/p-\d+/g) || []).length;
              if (paddingBreakpoints > 4) {
                context.report({
                  node,
                  message: `Too many padding breakpoints (${paddingBreakpoints}). Maximum 4 recommended: base, sm, md, lg`
                });
              }
              
              // Check for duplicate lg values
              const lgPadding = classNames.match(/lg:p-(\d+)/);
              const xlPadding = classNames.match(/xl:p-(\d+)/);
              if (lgPadding && xlPadding && lgPadding[1] === xlPadding[1]) {
                context.report({
                  node,
                  message: 'Duplicate padding values for lg and xl breakpoints'
                });
              }
            }
          }
        };
      }
    },
    
    'consistent-form-input-styling': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce consistent form input styling patterns',
          category: 'Best Practices'
        },
        schema: []
      },
      create(context) {
        return {
          JSXElement(node) {
            if (node.openingElement.name.name === 'input' || 
                node.openingElement.name.name === 'textarea' ||
                node.openingElement.name.name === 'select') {
              
              const classNameAttr = node.openingElement.attributes.find(
                attr => attr.name?.name === 'className'
              );
              
              if (classNameAttr?.value?.type === 'Literal') {
                const classNames = classNameAttr.value.value;
                
                // Check for consistent focus ring
                if (!classNames.includes('focus:ring-2') || !classNames.includes('focus:ring-yellow-600')) {
                  context.report({
                    node,
                    message: 'Form inputs should have consistent focus ring: focus:ring-2 focus:ring-yellow-600'
                  });
                }
                
                // Check for consistent border
                if (classNames.includes('border-2') && !classNames.includes('border-gray-200')) {
                  context.report({
                    node,
                    message: 'Form inputs with border-2 should use border-gray-200 for consistency'
                  });
                }
              }
            }
          }
        };
      }
    },
    
    'consistent-shadow-levels': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce consistent shadow level patterns',
          category: 'Design System'
        },
        schema: []
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className' && node.value?.type === 'Literal') {
              const classNames = node.value.value;
              
              // Check shadow progression
              if (classNames.includes('shadow-sm') && classNames.includes('hover:shadow-xl')) {
                context.report({
                  node,
                  message: 'Shadow progression too large. sm->lg or md->xl recommended'
                });
              }
              
              if (classNames.includes('shadow-2xl') && !classNames.includes('premium')) {
                context.report({
                  node,
                  message: 'shadow-2xl should only be used for premium/hero elements'
                });
              }
            }
          }
        };
      }
    },
    
    'form-error-handling-required': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure form components have error handling',
          category: 'Functionality'
        },
        schema: []
      },
      create(context) {
        let hasErrorState = false;
        let hasErrorMessages = false;
        let isFormComponent = false;
        
        return {
          Program() {
            hasErrorState = false;
            hasErrorMessages = false;
            isFormComponent = false;
          },
          
          JSXElement(node) {
            if (node.openingElement.name.name === 'form') {
              isFormComponent = true;
            }
          },
          
          Identifier(node) {
            if (node.name === 'errors' || node.name === 'error') {
              hasErrorState = true;
            }
            if (node.name.includes('Error') || node.name.includes('error')) {
              hasErrorMessages = true;
            }
          },
          
          'Program:exit'() {
            if (isFormComponent && !hasErrorState) {
              context.report({
                loc: { line: 1, column: 0 },
                message: 'Form components should implement error handling with error states and messages'
              });
            }
          }
        };
      }
    }
  }
};

