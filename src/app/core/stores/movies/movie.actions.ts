import { createAction, props } from '@ngrx/store';
import { Movie, MovieFilters } from '../../models/movie.model';

// LOAD
export const loadMovies = createAction('[Movie] Get Movies');

export const loadMoviesSuccess = createAction('[Movie] Get Movies Success', props<{ movies: Movie[] }>());

export const loadMoviesFailure = createAction('[Movie] Get Movies Failure', props<{ error: any }>());


// ADD
export const addMovie = createAction('[Movie] Add Movie', props<Movie>());

export const addMovieSuccess = createAction('[Movie] Add Movie Success', props<{ movies: Movie[] }>());

export const addMovieFailure = createAction('[Movie] Add Movie Failure', props<{ error: any }>());

// FILTER
export const updateFilters = createAction(
  '[SpotlightProfile] Update Filters',
  props<{ filters: Partial<MovieFilters> }>(),
);

export const updateFiltersWithKeyValue = createAction(
  '[Movie] Update Filters With Key Value',
  props<{ key: string; value: unknown }>(),
);


// RESET
export const clearFilters = createAction('[Movie] Clear All Filters');
