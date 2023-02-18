import { IMovie } from './../movieModel';
import { Injectable } from '@angular/core';
import { Movies } from '../movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies():Observable<IMovie[]> {
    return of(Movies)
  }

}
