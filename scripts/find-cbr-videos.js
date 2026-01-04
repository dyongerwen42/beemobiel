// Script to help find relevant CBR YouTube videos
// This script can be used to search for and list relevant videos

const videoCategories = {
  'eerste-rijles': {
    keywords: ['eerste rijles', 'eerste autorijles', 'beginner', 'eerste keer'],
    description: 'Video\'s over wat je kunt verwachten tijdens je eerste rijles'
  },
  'examenfouten': {
    keywords: ['examenfouten', 'veelgemaakte fouten', 'praktijkexamen fouten', 'top 5 fouten'],
    description: 'Video\'s over veelgemaakte fouten tijdens het praktijkexamen'
  },
  'rotondes': {
    keywords: ['rotondes', 'rotonde', 'invoegen', 'rondpunt'],
    description: 'Video\'s over hoe je rotondes correct neemt'
  }
}

console.log('CBR Video Categories:')
console.log(JSON.stringify(videoCategories, null, 2))

console.log('\nRelevante CBR YouTube video\'s kunnen worden gevonden op:')
console.log('https://www.youtube.com/@cbrnl/videos')
console.log('\nZoektermen per categorie:')
Object.entries(videoCategories).forEach(([category, data]) => {
  console.log(`\n${category}:`)
  console.log(`  Beschrijving: ${data.description}`)
  console.log(`  Zoektermen: ${data.keywords.join(', ')}`)
})

