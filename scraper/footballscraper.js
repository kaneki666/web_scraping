const puppeteer = require('puppeteer');
let plurl = 'https://www.premierleague.com/stats';

function topStats () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(plurl,{ timeout: 30 });
            let urls = await page.evaluate(() => {
                let results = [];
           
                let items = document.querySelectorAll('.statsCard');
                items.forEach((item) => {
                    results.push({
                        // title : item.querySelector('.statsCard .statsTitle').innerText,
                        top_posi: item.querySelector('.pos').innerText,
                        top_name: item.querySelector('.statName').innerText,
                        top_teamname: item.querySelector('.statNameSecondary').innerText,
                        number: item.querySelector('.stat').innerText
                		
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


function restStats () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(plurl,{ timeout: 0 });
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('.statsCard .statsRow');
                items.forEach((item) => {
                    results.push({
                        rest_posi: item.querySelector('.pos').innerText,
                        top_name: item.querySelector('.statName').innerText,
                        top_teamname: item.querySelector('.statNameSecondary').innerText,
                        number: item.querySelector('.stat').innerText
                		
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
// restStats().then(console.log).catch(console.error);
module.exports = {
	topStats,
	restStats	
}