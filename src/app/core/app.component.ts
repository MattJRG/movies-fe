import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Movie {
  name: string;
  releaseYear: number;
  mainActor: string;
  length: number;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  backendUrl = 'http://localhost:6700'
  movies: Movie[];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<{movies: Movie[]}>(`${this.backendUrl}/`).subscribe(res => {
      this.movies = res.movies;
    })
  }
}
