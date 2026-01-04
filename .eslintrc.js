/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // BeeMobiel Tailwind Consistency Rules
    'tailwind-consistency/button-padding-order': 'error',
    'tailwind-consistency/standard-button-classes': 'error',
    'tailwind-consistency/consistent-form-input-styling': 'error',
    'tailwind-consistency/card-padding-complexity': 'error',
    'tailwind-consistency/consistent-shadow-levels': 'warn',
    'tailwind-consistency/border-radius-approach': 'warn',
    
    // Prevent inconsistent Tailwind patterns
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Literal[value=/py-\\d+\\s+sm:py-\\d+\\s+px-\\d+/]',
        message: 'Use px before py in Tailwind classes for consistency (px-[...] py-[...])'
      },
      {
        selector: 'Literal[value=/p-\\d+\\s+sm:p-\\d+\\s+md:p-\\d+\\s+lg:p-\\d+\\s+xl:p-\\d+/]',
        message: 'Avoid 5+ padding breakpoints. Use maximum 4: base, sm, md, lg'
      }
    ],
    
    // Component naming consistency
    'filename-rules/match-exported': 'off', // Allow Section suffix consistency
    
    // Force consistent import ordering
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external', 
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    
    // React specific consistency
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-props-no-spreading': 'off', // Allow spreading for consistency components
    
    // TypeScript consistency
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false }
    ],
    
    // Accessibility consistency
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'] // Next.js Image component
      }
    ]
  },
  overrides: [
    {
      files: ['components/**/*.tsx'],
      rules: {
        // Component-specific rules
        'tailwind-consistency/component-section-suffix': 'error',
        'tailwind-consistency/consistent-hero-patterns': 'error',
        'tailwind-consistency/pricing-card-consistency': 'error'
      }
    },
    {
      files: ['**/*Hero*.tsx'],
      rules: {
        // Hero component specific rules
        'tailwind-consistency/hero-min-height-pattern': 'error',
        'tailwind-consistency/hero-typography-consistency': 'error'
      }
    },
    {
      files: ['**/*Pricing*.tsx'],
      rules: {
        // Pricing component specific rules  
        'tailwind-consistency/pricing-button-consistency': 'error',
        'tailwind-consistency/pricing-card-padding-limit': 'error'
      }
    },
    {
      files: ['**/*Form*.tsx'],
      rules: {
        // Form component specific rules
        'tailwind-consistency/form-input-consistency': 'error',
        'tailwind-consistency/form-error-handling-required': 'error'
      }
    }
  ],
  plugins: [
    'tailwind-consistency' // Custom plugin (to be created)
  ],
  settings: {
    tailwindcss: {
      config: './tailwind.config.ts'
    }
  }
};

