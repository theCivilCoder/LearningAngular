import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: '[formGroupName] app-mc-option',
  templateUrl: './mc-option.component.html',
  styleUrls: ['./mc-option.component.scss']
})
export class McOptionComponent implements OnInit {
  public answerForm : any
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.answerForm = this.controlContainer.control;
  }

}
