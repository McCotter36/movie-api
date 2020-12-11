const express = require('express'),
 morgan = require('morgan'),
 bodyParser = require('body-parser');

const app = express();

app.use(morgan('common'));

app.use(bodyParser.json());

app.use(express.static('public'));

const http = require('http'),
  url = require('url');

let topMovies = [
  {
    title: "Kingdom of Heaven",
    genre: "Action",
    director: "Ridley Scot"
  },
  {
    title: "The Last Samurai",
    genre: "Action",
    director: "Edward Zwick"
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    genre: "Fantasy",
    director: "Peter Jackson"
  },
  {
    title: "Inception",
    genre: "Action",
    director: "Chris Nolan"
  },
  {
    title: "Troy",
    genre: "Action",
    director: "Wolfgang Peterson"
  },
  {
    title: "Black Hawk Down",
    genre: "Action",
    director: "Ridley Scot"
  },
  {
    title: "Master and Commander",
    genre: "Action",
    director: "Peter Weir"
  },
  {
    title: "Serenity",
    genre: "Sci-Fi",
    director: "Joss Whedon"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    director: "Chris Nolan"
  },
  {
    title: "Tombstone",
    genre: "Action",
    director: "George P. Cosmatos"
  },
];

app.get('/', (req, res) => res.send('Welcome to MyFlix, enjoy your stay.'));

//return a list of all movies to user
app.get('/movies', (req, res) => res.json(topMovies));

app.get('/movies/:title', (req, res) => {
  res.json(topMovies.find((movie) =>
    { return movie.title === req.params.title }));
});

//Return data about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
  res.send('Successful GET request returning data on requested movie title: ' + req.params.title);
});

//Return data about a genre by name/title
app.get('/movies/genres/:genre', (req, res) => {
  res.send('Successful GET request returning data on requested movie genre: ' + req.params.genre)
});

//Return data about a director (bio, birth year, death year) by name
app.get('/movies/directors/:director', (req, res) => {
  res.send('Successful GET request returning data on requested movie director: ' + req.params.director)
  });

//Allow new users to register
app.post('/users', (req, res) => {
  res.send('Successful POST request registering new user.');
});

//Allow users to update their user info (username)
app.put('/users/:username', (req, res) => {
  res.send('Successful PUT request updating information for user: ' + req.params.username)
});

//Allow users to add a movie to their list of favorites
app.post('/users/:username/movies/:title', (req, res) => {
  res.send('Successful POST request adding movie: ' + req.params.title + ' to user ' + req.params.username + ' list of favorites.')
  });

//Allow users to remove a movie from their list of favorites
app.delete('/users/:username/movies/:title', (req, res) => {
  res.send('Successful DELETE request removing movie: ' + req.params.title + ' from user ' + req.params.username + ' list of favorites.')
  });

//Allow existing users to deregister
app.delete('/users/:username', (req,res) => {
  res.send('Successful DELETE request removing user: ' + req.params.username)
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('It appears that this app is not entirely stable!');
});

app.listen(8080, () => console.log('Your app is listening on port 8080.'));
