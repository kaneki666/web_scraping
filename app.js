const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const exphbs = require("express-handlebars");
const path = require("path")

const scraper = require("./scraper/scraper");
const torrentscraper = require("./scraper/torrentscraper");
const mediascraper = require("./scraper/mediascraper");
const newsscraper = require("./scraper/newsscraper");
const footballscraper = require("./scraper/footballscraper");


const app = express();


app.use(express.static(`${__dirname}/public`));

// handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware
app.use(bodyParser.json());
app.use(cors());
//Routes
app.get('/', (req, res) => res.render('menu'));
app.get('/Media', (req, res) => res.render('media'));
app.get('/Products', (req, res) => res.render('allproduct'));
app.get('/Torrent', (req, res) => res.render('torrent'));



app.get("/searchmedia", async(req, res) => {
    const { query } = req.query;
    const Media2 = await mediascraper.search2(query);
    const Media1 = await mediascraper.search1(query);
    const Media3 = await mediascraper.search3(query);
    const Media4 = await mediascraper.search4(query);
    const allProducts = [...Media2, ...Media1, ...Media3, , ...Media4];
    res.render('media', { allProducts });
});

app.get("/searchmediajson", async(req, res) => {
    const { query } = req.query;
    const Media2 = await mediascraper.search2(query);
    const Media1 = await mediascraper.search1(query);
    const Media3 = await mediascraper.search3(query);
    const Media4 = await mediascraper.search4(query);
    const allProducts = [...Media2, ...Media1, ...Media3, , ...Media4];
    res.json(allProducts);
});


app.get("/searchproducts", async(req, res) => {
    const { query } = req.query;
    const cellBazarProducts = await scraper.searchProducts1(query);
    const bikroyDotComProducts = await scraper.searchProducts2(query);
    const pickabooProducts = await scraper.searchProducts3(query);
    const allProducts = [...cellBazarProducts, ...pickabooProducts, ...bikroyDotComProducts];
    res.render('allproduct', { allProducts });
});

app.get("/searchproductsjson", async(req, res) => {
    const { query } = req.query;
    const cellBazarProducts = await scraper.searchProducts1(query);
    const bikroyDotComProducts = await scraper.searchProducts2(query);
    const pickabooProducts = await scraper.searchProducts3(query);
    const allProducts = [...cellBazarProducts, ...pickabooProducts, ...bikroyDotComProducts];
    res.json(allProducts);
});



app.get("/searchtorrent", async(req, res) => {
    const { query } = req.query;
    const piratebay = await torrentscraper.searchPiratebay(query);
    const Torrentz2 = await torrentscraper.searchTorrentz2(query);
    // const Zooqle = await torrentscraper.searchZooqle(query);
    const allTorrent = [...piratebay, ...Torrentz2];
    res.render('torrent', { allTorrent });
});
app.get("/searchtorrentjson", async(req, res) => {
    const { query } = req.query;
    const piratebay = await torrentscraper.searchPiratebay(query);
    const Torrentz2 = await torrentscraper.searchTorrentz2(query);
    // const Zooqle = await torrentscraper.searchZooqle(query);
    const allTorrent = [...piratebay, ...Torrentz2];
    res.json(allTorrent);
});

app.get("/newsjson", async(req, res) => {
    const bbcBangla = await newsscraper.bbcBangla();
    const prothomAlo = await newsscraper.prothomAlo();
    const dhakaTribune = await newsscraper.dhakaTribune();
    const allNews = [...bbcBangla, ...prothomAlo, ...dhakaTribune];
    res.json(allNews);
    
});
app.get("/topgoaljson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await top.slice(0,1);
    const rest = await rest.slice(0,9);
    const all = await topgoalplayer.concat(restgoalsplayer);

    res.json(all);
});

app.get("/topassistjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(1,2);
    const rest = await reststat.slice(9,18);
    const all = await top.concat(rest);

    res.json(all);
})

app.get("/toppassesjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(2,3);
    const rest = await reststat.slice(18,27);
    const all = await top.concat(rest);

    res.json(all);
});

app.get("/cleansheetsjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(3,4);
    const rest = await reststat.slice(27,36);
    const all = await top.concat(rest);

    res.json(all);
});

app.get("/topgoalteamjson", async(req, res) => {

    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(4,5);
    const rest = await reststat.slice(36,45);
    const all = await top.concat(rest);

    res.json(all);
});

app.get("/toppassesteamjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(5,6);
    const rest = await reststat.slice(45,54);
    const all = await top.concat(rest);

    res.json(all);
});

app.get("/topcleansheetsjsonteamjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(6,7);
    const rest = await reststat.slice(54,63);
    const all = await top.concat(rest);

    res.json(all);
});

app.get("/topcrossesteamjson", async(req, res) => {
    const topstat = await footballscraper.topStats();
    const reststat = await  footballscraper.restStats();
    const top = await topstat.slice(7,8);
    const rest = await reststat.slice(63,72);
    const all = await top.concat(rest);

    res.json(all);
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));