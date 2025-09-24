const {Movie, FranchiseFilm} = require("./MediaItem");

class Library {
  constructor() {
    this.movies = [
      new Movie(1, 'Pulp Fiction', 'Quentin Tarantino'),
      new Movie(2, 'Inception', 'Christopher Nolan'),
      new Movie(3, 'The Matrix', 'The Wachowskis'),
      new FranchiseFilm(4, 'The Fellowship of the Ring', 'Peter Jackson', 'The Lord of the Rings', 1, 3),
      new FranchiseFilm(5, 'The Two Towers', 'Peter Jackson', 'The Lord of the Rings', 2, 3),
      new FranchiseFilm(6, 'The Return of the King', 'Peter Jackson', 'The Lord of the Rings', 3, 3)
    ];
  }

  getAllMovies() {
    return this.movies;
  }

  getMovieById(id) {
    for (let movie of this.movies) {
      if (movie.id == id) {
        return movie;
      }
    }
  }
}

const libraryInstance = new Library();

module.exports = libraryInstance;
