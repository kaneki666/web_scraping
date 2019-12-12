const puppeteer = require('puppeteer');
let prothomALoUrl = 'https://www.prothomalo.com/bangladesh';

function prothomAlo () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(prothomALoUrl,{ timeout: 0 });
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('.col');
                items.forEach((item) => {
                    results.push({
                        title : item.querySelector('span.title').innerText,
                        summary: "Go to Link to know",
                        image : item.querySelector('div.image img').getAttribute('src'),
                        link :"https://www.prothomalo.com" + item.querySelector('.link_overlay').getAttribute('href'),
                        logo : "https://paloimages.prothom-alo.com/contents/themes/public/style/images/Prothom-Alo.png"
                    });
                });
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}


let bbcBanglaUrl = 'https://www.bbc.com/bengali/news/';

function bbcBangla () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(bbcBanglaUrl,{ timeout: 0 });
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('.eagle-item');
                items.forEach((item) => {
                    results.push({
                        title : item.querySelector('.title-link__title-text').innerText,
                        image : item.querySelector('.responsive-image__img').getAttribute('src'),
                        summary :item.querySelector('.eagle-item__summary').innerText,
                        link : "https://www.bbc.com" + item.querySelector('.title-link').getAttribute('href')
                    });
                });
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}


let dhakaTribuneUrl = 'https://www.dhakatribune.com/articles/bangladesh/';

function dhakaTribune () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(dhakaTribuneUrl,{ timeout: 0 });
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('.col-sm-4');
                items.forEach((item) => {
                    results.push({
                        title : item.querySelector('h4.news-title').innerText,
                        image : item.querySelector('div.top-news a img').getAttribute('src'),
                        summary : item.querySelector('p').innerText,
                        link : "https://www.dhakatribune.com" + item.querySelector('div.top-news-cont a').getAttribute('href'),
                        logo : "https://www.dhakatribune.com/img/logo.svg"
                    });
                });
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}

module.exports = {
   dhakaTribune,
   bbcBangla,
   prothomAlo
};