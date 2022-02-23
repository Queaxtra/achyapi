const express = require('express');
const app = express();
const htpp = require('http').Server(app);
const fetch = require('cross-fetch');
const fs = require('fs');
const FakeMe = require('fakeme');
const fm = new FakeMe({
  lang: 'en',
  sex: 'male'
});

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.end(`All APIs are given below; \n\n/api/user \n/api/creditcard`)
})

app.get('/api/user', (req, res) => {
    /* It's still in beta, but more could be added soon. */
    let name = fm.name({lang: 'en', count: 100})
    let randomname = name[Math.floor(Math.random() * name.length)];
    randomname = randomname.charAt(0).toLowerCase() + randomname.slice(1);
    let email = randomname.split(' ')[0] + Math.floor(Math.random() * 100000) + '@gmail.com';
    let phone = Math.floor(Math.random() * 10000000000);
    let location = [
        "Canada",
        "United States",
        "United Kingdom",
        "Australia",
        "New Zealand",
        "Ireland",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Portugal",
        "Switzerland",
        "Belgium",
        "Netherlands",
        "Austria",
        "Sweden",
        "Norway",
        "Denmark",
        "Finland",
        "Estonia",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Poland",
        "Czech Republic",
        "Slovakia",
        "Slovenia",
        "Croatia",
        "Bosnia and Herzegovina",
        "Albania",
        "Greece",
        "Macedonia",
        "Bulgaria",
        "Romania",
        "Serbia",
        "Turkey"
    ]
    let randomLocation = location[Math.floor(Math.random() * location.length)];
    res.json({
        name: randomname, 
        email: email,
        phone: phone,
        location: randomLocation
    })
});

app.get('/api/creditcard', (req, res) => {
    let cardtypes = [
        "Visa",
        "MasterCard",
        "American Express",
        "Discover",
        "Diners Club",
        "JCB",
        "UnionPay",
        "Maestro",
    ]
    let randomcardtype = cardtypes[Math.floor(Math.random() * cardtypes.length)];
    let month = Math.floor(Math.random() * 12) + 1;
    let year = Math.floor(Math.random() * 20) + 2021;
    let day = Math.floor(Math.random() * 28) + 1;
    let cvv = Math.floor(Math.random() * 900) + 100;
    if (randomcardtype === "American Express") {
        let cardnumber = "34" + Math.floor(Math.random() * 1000000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "Visa") {
        let cardnumber = "4" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "MasterCard") {
        let cardnumber = "51" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "Discover") {
        let cardnumber = "6011" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "Diners Club") {
        let cardnumber = "30" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "JCB") {
        let cardnumber = "35" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "UnionPay") {
        let cardnumber = "62" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    } else if (randomcardtype === "Maestro") {
        let cardnumber = "5018" + Math.floor(Math.random() * 100000000000000);
        res.json({
            cardtype: randomcardtype,
            cardnumber: cardnumber,
            month: month,
            year: year,
            day: day,
            cvv: cvv
        })
    }
});

app.listen(1769, () => console.log('UP!'))