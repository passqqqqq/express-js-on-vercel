require('dotenv').config();

const express = require('express');
const app = express();
const { sql } = require('@vercel/postgres');

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/', function (req, res) {


    res.send("Lobstering - The queen loves to go for sun tanning, but when she tans a little bit too much, her skins becomes red and that makes her look like a lobster!")


    // const list = [{
    //     description: 'Vitamins - The queen provides positive energy, motivation, and enjoyment, expressed as \"vitamins.\" Too much vitamins will give you an \"overdose\", from all her beauty, yapping, and all the cozy moments, leaving you all hyped up and over excited!',
    //     name: "vitamins",
    // }, {
    //     name: "lobstering",
    //     description: 'Lobster - The queen loves to go for sun tanning, but when she tans a little bit too much, her skins becomes red and that makes her look like a lobster!',
    // }]

    // const queryParam = req.query.name;

    // const result = list.find(item => item.name === queryParam);

	// res.send(result?.description);
});

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
