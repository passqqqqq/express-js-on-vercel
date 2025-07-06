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
	res.send("Vitamins - The queen provides positive energy, motivation, and enjoyment, expressed as \"0vitamins.\" An \"overdose\" humorously refers to watching too much of Karin's beauty, her chatting, and cozy moments, leaving you all hyped up and excited!");
});

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
