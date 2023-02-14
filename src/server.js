const express = require(`express`);
const path = require('path');
const app = express();

app.set(`PORT`, 8000);
app.set(`views`, path.join(__dirname + `./views`));

app.use(express.urlencoded({extended: false}));

app.get(`/`, (req, res) => {
    res.send(`Hello World`)
})

app.use(express.static(path.join(__dirname, `public`)))

module.exports = app;