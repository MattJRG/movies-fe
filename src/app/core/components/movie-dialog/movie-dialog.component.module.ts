import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [MovieDialogComponent],
  providers: [],
})
export class MovieDialogComponentModule {
}
