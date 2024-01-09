import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDataDialogComponent } from '../edit-data-dialog/edit-data-dialog.component';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(EditDataDialogComponent);
  }
}
