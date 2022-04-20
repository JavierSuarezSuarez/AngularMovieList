import { Injectable } from '@angular/core';
import { Movie } from './movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieListTransferService {


  movielist!: Movie [];

  constructor() { }

  public setMovieList(movielist: Movie[]) {
    this.movielist = movielist;
  }
  
  public getMovieList() {
    return this.movielist;
  }
}
