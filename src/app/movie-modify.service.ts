import { Injectable } from '@angular/core';
import { Movie } from './movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieModifyService {

  movie!: Movie;

  movielist!: Movie [];

  constructor() { }

  public setMovie(movie: Movie) {
    this.movie = movie;

  }

  public setMovieList(movielist: Movie[]) {

    this.movielist = movielist;

  }
  public modify() {
    for(var i = 0; i < this.movielist.length; i++) {
      if(this.movielist[i].id == this.movie.id) {
          this.movielist[i] = this.movie;
      }
    }
    return this.movielist;
  }
}
