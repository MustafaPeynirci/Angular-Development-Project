import { IMovie } from './../movieModel';
import { Injectable } from '@angular/core';
import { Movies } from '../movie.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): IMovie[] {
    return Movies
  }

}
