import { Component, OnInit } from '@angular/core';
import { MovieModifyService } from '../movie-modify.service';
import { Movie } from '../movie-interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieGetterService } from '../movie-getter.service';
import { MovieListTransferService } from '../movie-list-transfer.service';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})
export class ModifyFormComponent implements OnInit {

  public id!: number; //Id to get from route
  movie!: Movie; //Movie received from GeneralViewComponent
  initialList!: Movie []; //Movie list received
  resultList!: Movie []; //Movie list to send


  //Requires an ActivatedRoute to get the id from the movie selected and the service to get the attributes from the movie
  //Requires the Router and Services to Modify a Movie and to send the resulting movie List to GeneralViewComponent
  constructor(private actRoute: ActivatedRoute, private _movieGetterService: MovieGetterService, 
              private router: Router, private _movieModifyService: MovieModifyService, 
              private _movieListTransferService: MovieListTransferService) { }


  //############################################################## Methods ########################################################################//

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id']; //Gets the id from route
    this.movie = this._movieGetterService.search(this.id); //Gets the movie corresponding to the id
    this.initialList = this._movieListTransferService.getMovieList(); //Gets the movie list from GeneralViewComponent
  }

  modifyMovie() {
    this._movieModifyService.setMovie(this.movie); //Sets the movie gotten from GeneralViewComponent
    this._movieModifyService.setMovieList(this.initialList); //Sets the movie list gotten from GeneralViewComponent
    this.resultList = this._movieModifyService.modify(); //Returns the new movie list with the movie modified
    this._movieListTransferService.setMovieList(this.resultList); //Sets the new current movie list for GeneralViewComponent
    this.router.navigate(['/general']);
  }

}
