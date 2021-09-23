import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as MovieStore from './movie.reducer';
import { movieFeatureKey } from './movie.reducer';

export interface State {
  [movieFeatureKey]: MovieStore.MovieState;
}

export const reducers: ActionReducerMap<State> = {
  [movieFeatureKey]: MovieStore.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
