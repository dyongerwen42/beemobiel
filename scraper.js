const fs = require('fs');
const path = require('path');

// List of all pages to scrape
const pages = [
  { url: 'https://beemobiel.nl/', name: 'home' },
  { url: 'https://beemobiel.nl/tips-en-trucs', name: 'tips-en-trucs' },
  { url: 'https://beemobiel.nl/boek-nu', name: 'boek-nu' },
  { url: 'https://beemobiel.nl/lessen', name: 'lessen' },
  { url: 'https://beemobiel.nl/ervaringen', name: 'ervaringen' },
  { url: 'https://beemobiel.nl/voorwaarden-en-beleid', name: 'voorwaarden-en-beleid' },
  { url: 'https://beemobiel.nl/faqs', name: 'faqs' },
  { url: 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt', name: 'hoe-je-je-rijbewijs-haalt' },
  { url: 'https://beemobiel.nl/tarieven', name: 'tarieven' },
  { url: 'https://beemobiel.nl/autos', name: 'autos' },
  { url: 'https://beemobiel.nl/theorie', name: 'theorie' },
  { url: 'https://beemobiel.nl/motorfietsen-2', name: 'motorfietsen' },
  { url: 'https://beemobiel.nl/scooters-brommers', name: 'scooters-brommers' },
  { url: 'https://beemobiel.nl/over-ons', name: 'over-ons' },
  { url: 'https://beemobiel.nl/neem-contact-op', name: 'contact' },
];

async function scrapePage(url, name) {
  try {
    console.log(`Scraping ${name}...`);
    const response = await fetch(url);
    const html = await response.text();
    
    // Save HTML
    const htmlDir = path.join(__dirname, 'scraped-html');
    if (!fs.existsSync(htmlDir)) {
      fs.mkdirSync(htmlDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(htmlDir, `${name}.html`),
      html,
      'utf8'
    );
    
    console.log(`✓ Saved HTML for ${name}`);
    
    // Extract text content (basic extraction)
    const textContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    const textDir = path.join(__dirname, 'scraped-text');
    if (!fs.existsSync(textDir)) {
      fs.mkdirSync(textDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(textDir, `${name}.txt`),
      textContent.substring(0, 50000), // Limit to 50k chars
      'utf8'
    );
    
    console.log(`✓ Saved text for ${name}`);
  } catch (error) {
    console.error(`✗ Error scraping ${name}:`, error.message);
  }
}

async function scrapeAll() {
  console.log('Starting to scrape all pages...\n');
  
  for (const page of pages) {
    await scrapePage(page.url, page.name);
    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n✓ All pages scraped!');
  console.log(`HTML files saved in: ${path.join(__dirname, 'scraped-html')}`);
  console.log(`Text files saved in: ${path.join(__dirname, 'scraped-text')}`);
}

scrapeAll();




