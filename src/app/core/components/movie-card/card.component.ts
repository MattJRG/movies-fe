import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Movie } from '../../models/movie.model';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'card-component',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})

export class CardComponent {

  @Input()
  movie: Movie;

  constructor(private _dialog: MatDialog) {}

  onAddMovie(): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      data: {
        mode: 'add',
      },
    };

    const dialogRef = this._dialog.open(MovieDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      console.log('Dialog output: ', result);
    })
  }
}
