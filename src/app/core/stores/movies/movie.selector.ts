import { createFeatureSelector, createSelector } from '@ngrx/store';
import { movieFeatureKey, MovieState } from './movie.reducer';

export const selectMovieState = createFeatureSelector<MovieState>(movieFeatureKey);

export const selectMovieStateAction = createSelector(
  selectMovieState,
  (state) => state.action,
);

export const selectMovies = createSelector(selectMovieState, (state) => {
  return state.movies;
});
