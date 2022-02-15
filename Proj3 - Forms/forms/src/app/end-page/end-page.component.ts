import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})


export class EndPageComponent implements OnDestroy, OnInit {
  faPlus = null;
  faCheck = null;
  faTrash = null;

  // Dummy data to be obtained through the API (to be deleted)
  dummyData = [
    {
      name: "name1",
      type: "(RFP)",
      projectOwner: "1",
      status: "good",
      numCompletedResponses: 12,
      numTotalResponses: 12
    },
    {
      name: "name2",
      type: "(RFI)",
      projectOwner: "2",
      status: "Awaiting",
      numCompletedResponses: 6,
      numTotalResponses: 8
    },
    {
      name: "name3",
      type: "(RFP)",
      projectOwner: "3",
      status: "Awaiting",
      numCompletedResponses: 1,
      numTotalResponses: 4
    }
  ]

  // Angular DataTables parameters
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  // constructor(private httpClient: HttpClient) {
  constructor(private dialog:MatDialog) {  
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        lengthMenu: 'Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select form-select-lg">' +
            '<option value="10">10</option>'+
            '<option value="25">25</option>'+
            '</select> entries'
      },
      columnDefs: [{ orderable: false, targets: 0, searchable: false}],
      order: [1 , "asc"]
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    this.dialog.open(PopupDialogComponent, dialogConfig);
  }

}

