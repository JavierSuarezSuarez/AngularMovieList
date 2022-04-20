import { Component, OnInit } from '@angular/core';
import { MovieAddService } from '../movie-add.service';
import { Movie } from '../movie-interface';
import { Router } from '@angular/router';
import { MovieListTransferService } from '../movie-list-transfer.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  movie!: Movie; //Movie received from form
  initialList!: Movie []; //Movie list received
  resultList!: Movie []; //Movie list to send


  //Requires the Router and Services to Add a new Movie and to send the resulting movie List to GeneralViewComponent
  constructor(private router: Router, private _movieAddService: MovieAddService, private _movieListTransferService: MovieListTransferService) { }

  //############################################################## Methods ########################################################################//

  ngOnInit(): void {
    this.movie = {id: 0, title : "", genre: "", year: ""};
    this.initialList = this._movieListTransferService.getMovieList(); //Gets the movie list from GeneralViewComponent
  }


  
  addMovie() {
    this._movieAddService.setMovie(this.movie); //Sets the movie gotten from the form
    this._movieAddService.setMovieList(this.initialList); //Sets the movie list gotten from GeneralViewComponent
    this.resultList = this._movieAddService.add(); //Returns the new movie list with the new movie added
    this._movieListTransferService.setMovieList(this.resultList); //Sets the new current movie list for GeneralViewComponent
    this.router.navigate(['/general']);
  }

}
