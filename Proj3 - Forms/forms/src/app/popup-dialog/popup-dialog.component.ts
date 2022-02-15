import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PopupDialogComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

}
