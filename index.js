const express = require('express'),
 morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const http = require('http'),
  url = require('url');

let topMovies = [
  {
    title: 'Kingdom of Heaven',
    director: 'Ridley Scot'
  },
  {
    title: 'The Last Samurai',
    director: 'Edward Zwick'
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    director: 'Peter Jackson'
  },
  {
    title: 'Inception',
    director: 'Chris Nolan'
  },
  {
    title: 'Troy',
    director: 'Wolfgang Peterson'
  },
  {
    title: 'Black Hawk Down',
    director: 'Ridley Scot'
  },
  {
    title: 'Master and Commander',
    director: 'Peter Weir'
  },
  {
    title: 'Serenity',
    director: 'Joss Whedon'
  },
  {
    title: 'Interstellar',
    director: 'Chris Nolan'
  },
  {
    title: 'Tombstone',
    director: 'George P. Cosmatos'
  },
];

app.get('/', (req, res) => res.send('Welcome to MyFlix, enjoy your stay.'));

app.get('/movies', (req, res) => res.json(topMovies));

app.use('/documentation', express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('It appears that this app is not entirely stable!');
});

app.listen(8080, () => console.log('Your app is listening on port 8080.'));
