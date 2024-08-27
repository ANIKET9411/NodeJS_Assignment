const puppeteer = require('puppeteer');

async function scrapeIPLData() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.iplt20.com/stats/');

    // Adjust the following selectors based on the actual HTML structure of the IPL site
    const data = await page.evaluate(() => {
        let players = [];
        // Replace the '.player-row' with the actual selector that contains each player's data
       console.log(document.querySelectorAll('ng-repeat'));
       
        // .forEach(player => {
        //     players.push({
        //         name: player.querySelector('.st-ply-name').innerText, // Replace '.player-name' with the actual selector for player names
        //         runs: player.querySelector('.ng-bindings').innerText, // Replace '.player-runs' with the actual selector for runs
        //     });
        // });
        return players;
    });

    // console.log(data);
    await browser.close();
}

scrapeIPLData();
