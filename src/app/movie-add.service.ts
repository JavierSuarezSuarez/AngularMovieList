import { Injectable } from '@angular/core';
import { Movie } from './movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieAddService {

  movie!: Movie;

  movielist!: Movie [];

  constructor() { }

  public setMovie(movie: Movie) {
    this.movie = movie;

  }

  public setMovieList(movielist: Movie[]) {

    this.movielist = movielist;

  }
  public add() {

    var idvec = -1;

    for(var i = 0; i < this.movielist.length; i++) {
      if(this.movielist[i].id > idvec) {
          idvec = this.movielist[i].id;
      }
    }
    idvec++;
    this.movie.id = idvec;

    this.movielist.push(this.movie);

    return this.movielist;
  }
}
