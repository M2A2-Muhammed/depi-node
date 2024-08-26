const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).end('Hello, Muhammed!\n');
});

module.exports = app;

