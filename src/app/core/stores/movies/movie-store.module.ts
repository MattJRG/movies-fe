import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './movie.effects';
import * as MovieStore from './movie.reducer';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    StoreModule.forFeature(MovieStore.movieFeatureKey, MovieStore.reducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
  providers: [MovieService],
})
export class MovieStoreModule {}
