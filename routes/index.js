const express = require('express');
const router = express.Router();

const scraper = require("../scraper/scraper");
const torrentscraper = require("../scraper/torrentscraper");
const mediascraper = require("../scraper/mediascraper");
const newsscraper = require("../scraper/newsscraper");
const footballscraper = require("../scraper/footballscraper");


//Routes
router.get('/', (req, res) => res.render('menu'));
router.get('/Media', (req, res) => res.render('media'));
router.get('/Products', (req, res) => res.render('allproduct'));
router.get('/Torrent', (req, res) => res.render('torrent'));



router.get("/searchmedia", async(req, res) => {
    const { query } = req.query;
    const Media2 = await mediascraper.search2(query);
    const Media1 = await mediascraper.search1(query);
    const Media3 = await mediascraper.search3(query);
    const Media4 = await mediascraper.search4(query);
    const allProducts = [...Media2, ...Media1, ...Media3, , ...Media4];
    res.render('media', { allProducts });
});

router.get("/searchmediajson", async(req, res) => {
    const { query } = req.query;
    const Media2 = await mediascraper.search2(query);
    const Media1 = await mediascraper.search1(query);
    const Media3 = await mediascraper.search3(query);
    const Media4 = await mediascraper.search4(query);
    const allProducts = [...Media2, ...Media1, ...Media3, , ...Media4];
    res.json(allProducts);
});


router.get("/searchproducts", async(req, res) => {
    const { query } = req.query;
    const cellBazarProducts = await scraper.searchProducts1(query);
    const bikroyDotComProducts = await scraper.searchProducts2(query);
    const pickabooProducts = await scraper.searchProducts3(query);
    const allProducts = [...cellBazarProducts, ...pickabooProducts, ...bikroyDotComProducts];
    res.render('allproduct', { allProducts });
});

router.get("/searchproductsjson", async(req, res) => {
    const { query } = req.query;
    const cellBazarProducts = await scraper.searchProducts1(query);
    const bikroyDotComProducts = await scraper.searchProducts2(query);
    const pickabooProducts = await scraper.searchProducts3(query);
    const allProducts = [...cellBazarProducts, ...pickabooProducts, ...bikroyDotComProducts];
    res.json(allProducts);
});



router.get("/searchtorrent", async(req, res) => {
    const { query } = req.query;
    const piratebay = await torrentscraper.searchPiratebay(query);
    const Torrentz2 = await torrentscraper.searchTorrentz2(query);
    // const Zooqle = await torrentscraper.searchZooqle(query);
    const allTorrent = [...piratebay, ...Torrentz2];
    res.render('torrent', { allTorrent });
});
router.get("/searchtorrentjson", async(req, res) => {
    const { query } = req.query;
    const piratebay = await torrentscraper.searchPiratebay(query);
    const Torrentz2 = await torrentscraper.searchTorrentz2(query);
    // const Zooqle = await torrentscraper.searchZooqle(query);
    const allTorrent = [...piratebay, ...Torrentz2];
    res.json(allTorrent);
});

router.get("/newsjson", async(req, res) => {
    const bbcBangla = await newsscraper.bbcBangla();
    const prothomAlo = await newsscraper.prothomAlo();
    const dhakaTribune = await newsscraper.dhakaTribune();
    const allNews = [...bbcBangla, ...prothomAlo, ...dhakaTribune];
    res.json(allNews);
    
});
router.get("/topgoaljson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await top.slice(0,1);
    const rest = await rest.slice(0,9);
    const all = await topgoalplayer.concat(restgoalsplayer);

    res.json(all);
});

router.get("/topassistjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(1,2);
    const rest = await reststat.slice(9,18);
    const all = await top.concat(rest);

    res.json(all);
})

router.get("/toppassesjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(2,3);
    const rest = await reststat.slice(18,27);
    const all = await top.concat(rest);

    res.json(all);
});

router.get("/cleansheetsjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(3,4);
    const rest = await reststat.slice(27,36);
    const all = await top.concat(rest);

    res.json(all);
});

router.get("/topgoalteamjson", async(req, res) => {
	req.setTimeout(500000);
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(4,5);
    const rest = await reststat.slice(36,45);
    const all = await top.concat(rest);

    res.json(all);
});

router.get("/toppassesteamjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(5,6);
    const rest = await reststat.slice(45,54);
    const all = await top.concat(rest);

    res.json(all);
});

router.get("/topcleansheetsjsonteamjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(6,7);
    const rest = await reststat.slice(54,63);
    const all = await top.concat(rest);

    res.json(all);
});

router.get("/topcrossesteamjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(7,8);
    const rest = await reststat.slice(63,72);
    const all = await top.concat(rest);

    res.json(all);
});





module.exports = router;