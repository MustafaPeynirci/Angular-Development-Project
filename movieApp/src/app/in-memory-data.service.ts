import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {
          id:1, 
          name:"movie a",
          description:"nice film",
          imageUrl:"1.jpeg"
      },
      {
          id:2, 
          name:"movie b",
          description:"nice film",
          imageUrl:"2.jpeg"
      },
      {
          id:3, 
          name:"movie c",
          description:"nice film",
          imageUrl:"3.jpeg"
      },
      {
          id:4, 
          name:"movie d",
          description:"nice film",
          imageUrl:"4.jpeg"
      },
      {
          id:5, 
          name:"movie e",
          description:"nice film",
          imageUrl:"5.jpeg"
      }
    ]
    return { movies }
  }

  constructor() { }
}
