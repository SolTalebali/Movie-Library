const express = require("express");
const app = express();
const port = 3000;
const library = require("./Library");

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Library project");
});

app.get("/movies", (req, res) => {
  const movies = library.getAllMovies();
  let responseArray = [];
  for (let movie of movies) {
    responseArray.push(movie.getDetails());
  }
  res.status(200).json({ movies: responseArray });
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = library.getMovieById(id);

  if (!movie) {
    res.status(404).json({ error: "Movie not found" });
    return;
  }

  const movieDetails = movie.getDetails();

  res.status(200).json({
    movie: movieDetails,
  });
});
