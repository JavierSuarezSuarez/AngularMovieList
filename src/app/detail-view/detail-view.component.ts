import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie-interface';
import { MovieGetterService } from '../movie-getter.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() id = -1; //Id of the component to show
  @Output() flag = new EventEmitter<string>(); //Flag to order GeneralViewComponent to close this component

  movie!: Movie;

  //Requires an ActivatedRoute to get the id from the movie selected and the service to get the attributes from the movie
  constructor(private actRoute: ActivatedRoute, private _movieGetterService: MovieGetterService ) { }

  ngOnInit(): void {
    this.movie = this._movieGetterService.search(this.id); //Gets the movie corresponding to the id
  }
  

  //Orders GeneralViewComponent to close this component
  emitClose() {
    this.flag.emit("true");
  }
}
