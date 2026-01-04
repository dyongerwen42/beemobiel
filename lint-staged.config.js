module.exports = {
  // TypeScript and TSX files
  '*.{ts,tsx}': [
    'eslint --fix --max-warnings 0',
    'prettier --write'
  ],
  
  // Component files - additional consistency checks
  'components/**/*.tsx': [
    // Check for button consistency
    (filenames) => {
      const buttonsToCheck = filenames.filter(file => {
        const fs = require('fs')
        const content = fs.readFileSync(file, 'utf8')
        return content.includes('bg-yellow-600') || content.includes('bg-gray-900')
      })
      
      if (buttonsToCheck.length === 0) return []
      
      return [
        `echo "Checking button consistency in ${buttonsToCheck.join(', ')}"`,
        ...buttonsToCheck.map(file => 
          `node -e "
            const fs = require('fs');
            const content = fs.readFileSync('${file}', 'utf8');
            if (content.match(/py-[^\\s]*\\s+px-/)) {
              console.error('❌ ${file}: Button padding order incorrect (px should come before py)');
              process.exit(1);
            }
            if (content.includes('text-black') && content.includes('bg-yellow-600')) {
              console.error('❌ ${file}: Use text-gray-900 instead of text-black for yellow buttons');
              process.exit(1);
            }
            console.log('✅ ${file}: Button consistency OK');
          "`
        )
      ]
    },
    
    // Check for form consistency  
    (filenames) => {
      const formsToCheck = filenames.filter(file => file.includes('Form'))
      
      if (formsToCheck.length === 0) return []
      
      return [
        `echo "Checking form consistency in ${formsToCheck.join(', ')}"`,
        ...formsToCheck.map(file =>
          `node -e "
            const fs = require('fs');
            const content = fs.readFileSync('${file}', 'utf8');
            if (content.includes('input') && !content.includes('border-2')) {
              console.error('❌ ${file}: Form inputs should use border-2 for consistency');
              process.exit(1);
            }
            if (content.includes('input') && content.includes('border-gray-300')) {
              console.error('❌ ${file}: Form inputs should use border-gray-200 for consistency');
              process.exit(1);
            }
            console.log('✅ ${file}: Form consistency OK');
          "`
        )
      ]
    },
    
    // Check for card padding complexity
    (filenames) => {
      const cardsToCheck = filenames.filter(file => {
        const fs = require('fs')
        const content = fs.readFileSync(file, 'utf8')
        return content.includes('p-') && (content.includes('Card') || content.includes('rounded'))
      })
      
      if (cardsToCheck.length === 0) return []
      
      return [
        `echo "Checking card padding complexity in ${cardsToCheck.join(', ')}"`,
        ...cardsToCheck.map(file =>
          `node -e "
            const fs = require('fs');
            const content = fs.readFileSync('${file}', 'utf8');
            const paddingMatches = content.match(/p-\\d+\\s+sm:p-\\d+\\s+md:p-\\d+\\s+lg:p-\\d+\\s+xl:p-\\d+/g);
            if (paddingMatches) {
              console.error('❌ ${file}: Card has 5+ padding breakpoints. Maximum 4 recommended');
              process.exit(1);
            }
            console.log('✅ ${file}: Card padding complexity OK');
          "`
        )
      ]
    }
  ],
  
  // Style-related files
  '*.{css,scss,sass}': [
    'prettier --write'
  ],
  
  // Config files
  '*.{json,yml,yaml}': [
    'prettier --write'
  ],
  
  // Documentation
  '*.md': [
    'prettier --write'
  ]
}

