import { Movie } from '../../app.component';
import { createAction, props } from '@ngrx/store';

// LOAD
export const loadMovies = createAction('[Movie] Get Movies');

export const loadMoviesSuccess = createAction('[Movie] Get Movies Success', props<{ movies: Movie[] }>());

export const loadMoviesFailure = createAction('[Movie] Get Movies Failure', props<{ error: any }>());


// ADD
export const addMovie = createAction('[Movie] Add Movie', props<Movie>());

export const addMovieSuccess = createAction('[Movie] Add Movie Success', props<{ movies: Movie[] }>());

export const addMovieFailure = createAction('[Movie] Add Movie Failure', props<{ error: any }>());


// RESET
// export const resetToDefaultMovie = createAction('[Movie] Reset Movie');
