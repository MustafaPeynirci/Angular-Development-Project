import { LoggingService } from './../logging-service/logging.service';
import { IMovie } from './../movieModel';
import { Injectable } from '@angular/core';
import { Movies } from '../movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService:LoggingService) { }

  getMovies():Observable<IMovie[]> {
    this.loggingService.add("MovieService: listing movies")
    return of(Movies)
  }

}
