import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Movie } from '../movie-interface';
import { Router } from '@angular/router';
import { MovieGetterService} from '../movie-getter.service';
import { MovieListTransferService } from '../movie-list-transfer.service';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {

  //-------------------------------------------------------------- Section texts ---------------------------------------------//

  //Texts to help the user
  addbtnText = "Para añadir una película, haz click en el siguiente botón ";
  tableText = "En la siguiente tabla puedes observar, modificar y eliminar las películas añadidas";

  //-------------------------------------------------------------- Table config ----------------------------------------------//
  @ViewChild(MatTable) table!: MatTable<Element>; //This makes the table to look for modifications and enables the renderRows() method
  columnasTabla: string[] = ['id','title', 'genre', 'year', 'ver','editar', 'eliminar'];//Table columns

  //-------------------------------------------------------------- Movie parameters ----------------------------------------//
  movie!: Movie; //With the ! we omit the initialization errors
  idToSee = -1; //Id of the component that will be shown in DetailViewComponent

  //Default Array of movies
  movielist : Movie[] = [
    {id:1, "title": "Star Wars: Episode I - The Phantom Menace", "genre": "Space opera", "year": "1999"},
    {id:2, "title": "Star Wars: Episode II - Attack of the Clones", "genre": "Space opera", "year": "2002"},
    {id:3, "title": "Star Wars: Episode III - Revenge of the Sith", "genre": "Space opera", "year": "2005"},
    {id:4, "title": "Star Wars: Episode IV - A New Hope", "genre": "Space opera", "year": "1977"},
    {id:5, "title": "Star Wars: Episode V - The Empire Strikes Back", "genre": "Space opera", "year": "1980"},
    {id:6, "title": "Star Wars: Episode VI - Return of the Jedi", "genre": "Space opera", "year": "1983"},
    {id:7, "title": "Star Wars: Episode VII - The Force Awakens", "genre": "Space opera", "year": "2015"},
    {id:8, "title": "Star Wars: Episode VIII - The Last Jedi", "genre": "Space opera", "year": "2017"},
    {id:9, "title": "Star Wars: Episode IX - The Rise of Skywalker", "genre": "Space opera", "year": "2019"},
  ]; 

  //Requires the Router and Services to get the list to show and to establish the movie list to get from other components
  constructor(private router: Router, private _movieGetterService: MovieGetterService, private _movieListTransferService: MovieListTransferService) { }


//############################################################## Methods ########################################################################//

  ngOnInit(): void {
    //If either Create or Modify Component sets a new current movie List, this will be displayed instead of the default one
    if(this._movieListTransferService.getMovieList() != undefined) {
      this.movielist = this._movieListTransferService.getMovieList();
    }
  }

  
  //READ in detail
  //Redirects the user to see in detail a movie passing the id and setting the Service movie list
  redirectToSee(idrecogida: number){
    this._movieGetterService.setMovieList(this.movielist);
    this.idToSee = idrecogida;
  }

  //Closes the DetailViewComponent
  closeDetails(flag: string) {
    if(flag == "true") {
      this.idToSee = -1;
    }
  }

  //CREATE
  //Redirects the user to the CreateComponent setting the Service movie list
  redirectToCreate(){
    this._movieListTransferService.setMovieList(this.movielist);
    this.router.navigate(['/create']);
  }


  //UPDATE
  //Redirects the user to the ModifyComponent passing the id and setting the Service movie list in both services
  redirectToUpdate(idrecogida: number){
    this._movieGetterService.setMovieList(this.movielist);
    this._movieListTransferService.setMovieList(this.movielist);
    this.router.navigate(['/modify', idrecogida]);
  }
  
  //DELETE
  //Deletes a movie from the array
  //Finds in the array the movie with the id given and deletes it refreshing the table 
  deleteMovie(idrecogida: number) {
    for(var i = 0; i < this.movielist.length; i++) {
      if(this.movielist[i].id == idrecogida) {
        this.movielist.splice(i, 1);
        this.table.renderRows();
      }
    }
  }
}
