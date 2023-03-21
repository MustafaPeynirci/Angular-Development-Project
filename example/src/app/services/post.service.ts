import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/postxx"

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  createPost(post) {
    return this.httpClient.post(this.url, JSON.stringify(post))
  }
  updatePost(post) {
    return this.httpClient.put(this.url + "/" + post.id, JSON.stringify(post))
  }
  deletePost(post) {
    return this.httpClient.delete(this.url + "a" + "/" + post.id).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client error
      console.log("client error: " + error.error.message);
    }
    else {
      //backend error
      console.log(`backend error: status code: ${error.status} error: ${error.error.message}`);
    }
    return throwError("an unknown error occurred")
  }
}
