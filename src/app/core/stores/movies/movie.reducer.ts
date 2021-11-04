import { Action, createReducer, on } from '@ngrx/store';
import { Movie, MovieFilters } from '../../models/movie.model';
import * as MovieActions from './movie.actions';

export const movieFeatureKey = 'movies';

export interface MovieState {
  movies: Movie[];
  filters: MovieFilters,
  action: MovieStateAction;
  payload: any;
  error: any;
}

export enum MovieStateAction {
  NO_ACTION,

  MOVIES_LOADED,
  MOVIE_ADDED,

  FILTERS_UPDATED,
  FILTERS_RESET,

  HAS_ERROR,
}

const initialStateHandling: Partial<MovieState> = {
  filters: {
    page: 1,
    page_size: 20,
  },

  action: MovieStateAction.NO_ACTION,
  error: null,
};

export const initialState: MovieState = {
  movies: [{}, {}, {}],
  ...(<MovieState>initialStateHandling),
};

const movieReducer = createReducer(
  initialState,

  // LOAD
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

  // FILTER
  on(MovieActions.updateFilters, (state, { filters }) => ({
    ...state,
    filters: { ...state.filters, ...filters },
    ...initialStateHandling,
    action: MovieStateAction.FILTERS_UPDATED,
  })),

  // We always want to set the page to 1 when updating the filters unless the update is triggered by pagination
  on(MovieActions.updateFiltersWithKeyValue, (state, { key, value }) => ({
    ...state,
    filters: { ...state.filters, page: 1, [key]: value },
    ...initialStateHandling,
  })),

  // ADD
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

  // RESET
  on(MovieActions.clearFilters, () => ({
    ...initialState,
    action: MovieStateAction.FILTERS_RESET,
  })),
);

export function reducer(state: MovieState, action: Action): MovieState {
  return movieReducer(state, action);
}
