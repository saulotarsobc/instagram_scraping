const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    
    await page.goto('https://www.instagram.com/entrefiosstm/', {
        waitUntil: 'networkidle2',
    });

    const imgList = await page.evaluate(() => {
        const imgArray = [...document.querySelectorAll('article img')];
        const imgList = imgArray.map(({ src, alt }) => ({ src, alt }));
        return imgList;
    });

    await browser.close();

    console.log(imgList);
})();


// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://news.ycombinator.com', {
//         waitUntil: 'networkidle2',
//     });
//     await page.pdf({ path: 'hn.pdf', format: 'a4' });

//     await browser.close();
// })();