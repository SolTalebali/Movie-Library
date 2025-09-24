class Movie {
  constructor(id, title, director) {
    this.title = title;
    this.id = id;
    this.director = director;
  }

  getDetails() {
    return `title: ${this.title}, director: ${this.director}`;
  }
}

class FranchiseFilm extends Movie {
  constructor(
    id,
    title,
    director,
    franchiseName,
    installmentNumber,
    totalInstallments,
  ) {
    super(id, title, director);
    this.franchiseName = franchiseName;
    this.installmentNumber = installmentNumber;
    this.totalInstallments = totalInstallments;
  }
  getDetails() {
    let movieDetails = super.getDetails();
    let newInfo = `, franchiseName: ${this.franchiseName}, InstallmentNumber: ${this.installmentNumber}, totalInstalments: ${this.totalInstallments}`;
    movieDetails += newInfo;
    return movieDetails;
  }
}

module.exports = {Movie, FranchiseFilm};
