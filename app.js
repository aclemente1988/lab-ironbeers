const express = require('express'); //esta
const app = express(); //esta

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');


const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  punkAPI.getBeers()
  .then(beersFromApi =>{
    console.log(beersFromApi);
    res.render('beers',{beersFromApi});

  })
  .catch(error => console.log(error));
  
});

app.get('/random-beer', (req, res) => {
  punkAPI.getRandom()
  .then(beersRandomFromApi =>{
    console.log(beersRandomFromApi);
    res.render('random-beer',{beersRandomFromApi});

  })
  .catch(error => console.log(error));
  
});


app.listen(3000, () => console.log('🏃‍ on port 3000'));
