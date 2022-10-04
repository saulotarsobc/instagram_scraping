const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://developers.google.com/', { waitUntil: 'load' });
    // Find the search box using a suitable CSS selector.
    const search = await page.$('devsite-search > form > div.devsite-search-container');
    // Click to expand search box and focus it.
    await search.click();
    // Enter search string and press Enter.
    await search.type('puppetaria');
    await search.press('Enter');
})();