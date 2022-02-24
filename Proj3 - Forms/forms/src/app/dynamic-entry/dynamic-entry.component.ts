import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: '[formGroupName] app-dynamic-entry',
  templateUrl: './dynamic-entry.component.html',
  styleUrls: ['./dynamic-entry.component.scss', '../dynamic-form/dynamic-form.component.scss']
})
export class DynamicEntryComponent implements OnInit {
  public questionForm : any 
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.questionForm = this.controlContainer.control;
  }

}
