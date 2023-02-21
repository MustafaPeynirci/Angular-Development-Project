import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movieModel';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  title = "Movie List"
  movies: IMovie[]
  selectedMovie: IMovie

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  onSelect(movie:IMovie): void {
    this.selectedMovie = movie
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe(response => {
      this.movies = response
    })
  }
  add(name:string, imageUrl:string, description:string): void {
    this.movieService.add({name, imageUrl, description} as IMovie).subscribe(response => {
      this.movies.push(response)
    })
  }

}
