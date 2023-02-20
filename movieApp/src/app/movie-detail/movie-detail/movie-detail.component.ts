import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieService } from './../../movie-service/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/movieModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:IMovie

  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    this.movieService.getMovie(id).subscribe(response => {
      this.movie = response
    })
  }
  save(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.location.back()
    })
  }

}
