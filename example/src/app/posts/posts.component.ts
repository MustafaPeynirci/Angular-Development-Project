import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private url = "https://jsonplaceholder.typicode.com/posts"
  posts: [any]

  constructor(private httpClient: HttpClient) {

    httpClient.get(this.url).subscribe(response => {
      this.posts = <[any]>response
    })

  }

  ngOnInit(): void {
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value }

    this.httpClient.post(this.url, JSON.stringify(post)).subscribe(response => {
      post['id'] = response['id']
      this.posts.splice(0, 0, post)
      console.log(response);

    })

  }

}
