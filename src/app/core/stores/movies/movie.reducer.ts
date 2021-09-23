import { Movie } from '../../app.component';
import { Action, createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

export const movieFeatureKey = 'movies';

export interface MovieState {
  movies: Movie[];
  action: MovieStateAction;
  payload: any;
  error: any;
}

export enum MovieStateAction {
  NO_ACTION,

  MOVIES_LOADED,
  MOVIE_ADDED,

  HAS_ERROR,
}

const initialStateHandling: Partial<MovieState> = {
  action: MovieStateAction.NO_ACTION,
  error: null,
};

export const initialState: MovieState = {
  movies: [{}, {}, {}],
  ...(<MovieState>initialStateHandling),
};

const movieReducer = createReducer(
  initialState,

  on(MovieActions.loadMovies, (state) => ({
    ...state,
    ...initialStateHandling,
  })),

  on(MovieActions.loadMoviesSuccess, (state, payload: { movies: Movie[] }) => ({
    ...state,
    movies: [...payload.movies],
    action: MovieStateAction.MOVIES_LOADED,
  })),

  on(MovieActions.loadMoviesFailure, (state) => ({
    ...state,
    action: MovieStateAction.HAS_ERROR,
  })),

  on(MovieActions.addMovie, (state, movie ) => ({
    ...state,
    ...initialStateHandling,
  })),

  on(MovieActions.addMovieSuccess, (state, payload: { movies: Movie[] }) => ({
    ...state,
    movies: [...payload.movies],
    action: MovieStateAction.MOVIE_ADDED,
  })),

  on(MovieActions.addMovieFailure, (state) => ({
    ...state,
    action: MovieStateAction.HAS_ERROR,
  })),
);

export function reducer(state: MovieState, action: Action): MovieState {
  return movieReducer(state, action);
}
