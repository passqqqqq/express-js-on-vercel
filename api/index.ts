import { ExplainService } from "./services/explainService";

require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/', function (req, res) {
    const query = req.query.searchQuery;

    if (!query) {
        res.send("No query provided");
        return;
    }

    const explanation = new ExplainService().getExplanation(query);

    if (explanation) {
        res.send(explanation);
        return;
    }

    if (query.toLowerCase().includes("list")) {
        const list = new ExplainService().getAvailableTerms();
        res.send(`Available terms: ${list}`);
        return;
    }

    res.send("No explanation found");
})

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
