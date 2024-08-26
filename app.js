const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).end('Hello, World!\n');
});

module.exports = app;

