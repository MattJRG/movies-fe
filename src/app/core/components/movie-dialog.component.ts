import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'movie-dialog.component',
  templateUrl: 'movie-dialog.component.html'
})

export class MovieDialogComponent implements OnInit {
  mode: 'add' | 'edit';

  // TODO: Add Data type
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.mode = data.mode;
  }

  ngOnInit(): void {
  }
}
