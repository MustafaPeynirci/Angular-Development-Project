import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/movieModel';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:IMovie

  constructor() { }

  ngOnInit(): void {
  }
  update(){

  }

}
