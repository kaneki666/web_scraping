const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const exphbs = require("express-handlebars");
const path = require("path")

const cron = require('node-cron');
const nodemailer = require('nodemailer');

const app = express()

const mailSender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : "msadman789@gmail.com",
        pass : "789123789456"
    }
});

//email will be send  11 AM from different 49 zone 15 december...
const input_time = 11;
const GMT_1  = { Europe_Brussels, Europe_Rome, Europe_Skopje, Europe_Zurich, Europe_Copenhagen, Europe_Busingen, Europe_Madrid, Europe_Budapest} = input_time + 1;
const GMT_2  = { Africa_Kigali, Africa_Lubumbashi, Europe_Kiev, Africa_Johannesburg } = input_time + 2;
const GMT_3  = { Asia_Riyadh, europe_Minsk} = input_time + 3;
const GMT_4  = { Europe_Samra } = input_time + 4;
const GMT_5  = { Asia_Qyzylorda } = input_time + 5;
const GMT_6  = { Asia_Dhaka, Asia_Thimphu } = input_time + 6;
const GMT_7  = { Asia_Pontianak, Asia_Bangkok, Asia_Novosibirsk } = input_time + 7;
const GMT_8  = { Asia_Taipei, Asia_kuching, Asia_Irkusk } = input_time + 8;
const GMT_9  = { Asia_Khandyga, Asia_yakutsk } = input_time + 9;
const GMT_10 = { Antarctica_DumontDUrville, Australia_Brisbane } = input_time + 10;
const GMT_11 = { Australia_Currie } = input_time + 11;
const GMT_12 = { Pacific_Kwajalein } = input_time + 12;
const GMT_13 = { Pacific_Auckland } = input_time + 13;
const GMT__3 = { Antarctica_Palmer } = input_time - 3;
const GMT__4 = { America_Goose_Bay } = input_time - 4;
const GMT__5 = { America_Pangnirtung, America_Thunder_Bay } = input_time - 5;
const GMT__6 = { America_Monterrey, America_Tegucigalpa, America_Costa_Rica } = input_time - 6;
const GMT__7  = { America_Whitehorse, America_Tijuana, America_Dawson } = input_time - 8;


cron.schedule(`* ${GMT_1},${GMT_2},${GMT_3},${GMT_4},${GMT_5},${GMT_6},${GMT_7},${GMT_8},${GMT_9},${GMT_10},${GMT_11},${GMT_12},${GMT_13},${GMT__3},${GMT__4},${GMT__5},${GMT__6},${GMT__7} 15 12 *`, (req, res) => {
    console.log("Sending Mail!!!");
    const mailTo = {
        from: "msadman789@gmail.com",
        to: "msadman789@gmail.com",
        subject: "test",
        text: "this was send by nodemailer"
    };
    mailSender.sendMail(mailTo, (error, info) => {
        if (error) {
            throw error;
        } else {
            console.log("Email send from india")
        }
    });
});

app.use(express.static(`${__dirname}/public`));

// handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware
app.use(bodyParser.json());
app.use(cors());
//router
app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));