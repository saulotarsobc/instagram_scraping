const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/entrefiosstm/', {
        waitUntil: 'networkidle2',
    });

    const imgList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('article img');
        const imgArray = [...nodeList];
        // imgArray.forEach(element => {
        //     console.log(element);
        // });
        const imgList = imgArray.map(({ src }) => ({ src }));
        console.log(imgList);
        return imgList;
    });

    console.log(imgList);

    // await browser.close();

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