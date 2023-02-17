import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie.datasource';
import { IMovie } from '../movieModel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  title = "Movie List"
  movies = Movies
  selectedMovie: IMovie

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(movie:IMovie):void{
    this.selectedMovie = movie
  }

}
