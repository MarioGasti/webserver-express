const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// helpers hbs


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'gAstón feRRUfiNo'
    });
});
6
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});