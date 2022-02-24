import { Component, OnInit } from '@angular/core';
import { DynamicEntryComponent } from '../dynamic-entry/dynamic-entry.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  index = 0;
  arrEntries: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewEntry(){
    this.arrEntries.push(this.index)
    this.index++
  }


}
