import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: '[formGroupName] app-group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupChildComponent implements OnInit {
  public addressFormGroup : any 

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.addressFormGroup = this.controlContainer.control;
  }
}
