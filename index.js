const puppeteer = require('puppeteer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser({ extended: false }));

app.get('/', (req, res) => {
    let { profile } = req.body;
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://www.instagram.com/${profile}/`, {
            waitUntil: 'networkidle2',
        });
        const imgList = await page.evaluate(() => {
            const imgArray = [...document.querySelectorAll('article img')];
            const imgList = imgArray.map(({ src, alt }) => ({ src, alt }));
            console.log(imgList);
            return imgList;
        });
        res.status(200);
        res.json({
            msg: 'ok',
            imgList
        });
        await browser.close();
    })();
});

app.listen(3000, console.log('servidor preparado'));



