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
	res.send("Vitamins - The queen provides positive energy, motivation, and enjoyment, expressed as \"vitamins.\" Too much vitamins will give you an \"overdose\", from all her beauty, yapping, and all the cozy moments, leaving you all hyped up and over excited!");
});

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
