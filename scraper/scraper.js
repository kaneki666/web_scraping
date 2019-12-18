const fetch = require("node-fetch");
const cheerio = require("cheerio");
const random =require('random-key-generator');

const url1 = "https://bikroy.com/bn/ads?query=";
const url2 = "https://cellbazaar.com/search/pattern,";
const url3 = "https://www.pickaboo.com/search/result/?q="

function searchProducts1(searchTerm) {
    return fetch(`${url1}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $(".normal--2QYVk").each(function(i, element) {
                const $element = $(element);
                const $title = $element.find(".title--3yncE");
                const $location = $element.find(".item-area");
                const $price = $element.find(".price--3SnqI");
                const $link = $element.find("a");
                const $image = $element.find(".normal-ad--1TyjD");
                const $bikroy = "https://bikroy.com";
                const $website = "Product of bikroy.com";
                const $key = random.getRandom(10);

                const product = {
                    title: $title.text(),
                    location: $location.text(),
                    price: $price.text(),
                    link: $bikroy + $link.attr("href"),
                    image: $image.attr("src"),
                    website: $website,
                    key: $key
                };
                products.push(product);
            });

            return products;
        });
}


function searchProducts2(searchTerm) {
    return fetch(`${url2}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $(".tanim-item").each(function(i, element) {
                const $element = $(element);
                const $title = $element.find(".resp-title");
                const $location = $element.find(".loc");
                const $price = $element.find(".price");
                const $link = $element.find(".view");
                const $image = $element.find(".lazy");
                const $website = " Product of cellbazaar.com";
                const $key = random.getRandom(10);

                const product = {
                    title: $title.text(),
                    location: $location.text(),
                    price: $price.text(),
                    link: $link.attr("href"),
                    image: $image.attr("src"),
                    website: $website,
                    key: $key
                };
                products.push(product);
            });

            return products;
        });
}

function searchProducts3(searchTerm) {
    return fetch(`${url3}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body)
            $(".product-item").each(function(i, element) {
                const $element = $(element);
                const $title = $element.find("a");
                const $website = " Product of pickaboo.com";
                const $price = $element.find(".price");
                const $link = $element.find("a");
                const $image = $element.find(".img-responsive");
                const $key = random.getRandom(10);

                const product = {
                    title: $title.attr('title'),
                    price: $price.text(),
                    link: $link.attr("href"),
                    image: $image.attr("src"),
                    website: $website,
                    key: $key
                };
                products.push(product);
            });

            return products;
        });
}



module.exports = {
    searchProducts1,
    searchProducts2,
    searchProducts3
};
