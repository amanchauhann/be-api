const jsonData = require('./db.json');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

Object.keys(jsonData).forEach(routeName => {
    app.get(`/${routeName}`, (req, res) => {
        res.json(jsonData[routeName]);
    });

    console.log(`Route created: /${routeName}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
    console.log(`Available routes: ${Object.keys(jsonData).map(route => `/${route}`).join(', ')}`);
});