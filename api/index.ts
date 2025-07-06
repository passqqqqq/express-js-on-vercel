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
	res.send('WHen you watch a little bit too much queens stream, you will get an overdose.');
});

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
