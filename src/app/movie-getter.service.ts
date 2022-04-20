import { Injectable } from '@angular/core';
import { Movie } from './movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieGetterService {

  movielist!: Movie [];

  constructor() { }

  public setMovieList(movielist: Movie[]) {

    this.movielist = movielist;

  }
  public search(id: number) {

    for(var i = 0; i < this.movielist.length; i++) {
      if(this.movielist[i].id == id) {
        return this.movielist[i];
      }
    }

    return this.movielist[0];
  }
}
