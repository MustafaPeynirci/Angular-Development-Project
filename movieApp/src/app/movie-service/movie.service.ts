import { HttpClient } from '@angular/common/http';
import { LoggingService } from './../logging-service/logging.service';
import { IMovie } from './../movieModel';
import { Injectable } from '@angular/core';
import { Movies } from '../movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = "api/movies"

  constructor(
    private loggingService:LoggingService,
    private http:HttpClient
    ) { }

  getMovies():Observable<IMovie[]> {
    this.loggingService.add("MovieService: listing movies")
    return this.http.get<IMovie[]>(this.apiMoviesUrl)
  }
  getMovie(id):Observable<IMovie>{
    this.loggingService.add("MovieService: get detail by id = " + id)
    return this.http.get<IMovie>(this.apiMoviesUrl + "/" + id)
  }

}
