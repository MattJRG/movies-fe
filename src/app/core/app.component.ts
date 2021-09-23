import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieState } from './stores/movies/movie.reducer';
import { selectMovies } from './stores/movies/movie.selector';
import * as MovieActions from './stores/movies/movie.actions';


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
  movies$: Observable<Movie[]>;

  constructor(private _http: HttpClient, private _movieStore: Store<MovieState>,) {}

  // FIXME: Build out the add movie functionality
  ngOnInit(): void {
    this.movies$ = this._movieStore.select(selectMovies);
    this._movieStore.dispatch(MovieActions.loadMovies());
  }
}
