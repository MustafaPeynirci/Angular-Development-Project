import { MovieService } from './../movie-service/movie.service';
import { IMovie } from 'src/app/movieModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:IMovie[]=[]
  moviesLength:number

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(response => {
      this.movies = response.slice(0,5)
      this.moviesLength = response.length
    })
  }

}
