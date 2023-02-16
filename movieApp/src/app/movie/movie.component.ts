import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  title = "Movie List"
  movies = Movies

  constructor() { }

  ngOnInit(): void {
  }

}
