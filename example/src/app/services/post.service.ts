import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url)
  }
  createPost(post) {
    return this.httpClient.post(this.url, JSON.stringify(post))
  }
  updatePost(post) {
    return this.httpClient.put(this.url + "/" + post.id, JSON.stringify(post))
  }
  deletePost(post) {
    return this.httpClient.delete(this.url + "/" + post.id)
  }
}
