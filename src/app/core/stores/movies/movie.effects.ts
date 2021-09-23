import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as MovieActions from './movie.actions';
import { MovieState } from './movie.reducer';
import { MovieService } from './movie.service';

@Injectable()
export class MovieEffects {
  // LOAD
  loadMovies$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MovieActions.loadMovies),
      exhaustMap(() =>
        this._movieService.loadMovies().pipe(
          map((res) => MovieActions.loadMoviesSuccess({ movies: res.movies })),
          catchError((error) => of(MovieActions.loadMoviesFailure({ error }))),
        ),
      ),
    ),
  );

  // ADD
  addMovie$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MovieActions.addMovie),
      exhaustMap((action) =>
        this._movieService.addMovie(action).pipe(
          map((res) => MovieActions.addMovieSuccess({ movies: res.movies })),
          catchError((error) => of(MovieActions.addMovieFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private _actions$: Actions,
    private _movieStore: Store<MovieState>,
    private _movieService: MovieService,
  ) {}
}
