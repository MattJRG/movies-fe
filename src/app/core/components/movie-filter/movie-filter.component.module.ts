import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MovieFilterComponent } from './movie-filter.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [MovieFilterComponent],
  providers: [],
})
export class MovieFilterComponentModule {
}
