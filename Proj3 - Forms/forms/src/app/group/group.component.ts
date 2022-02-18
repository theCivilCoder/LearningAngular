import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
      name: '',
      // address_line1: '',
      // address_line2: '',
      address: this.formBuilder.group({
        line1: '',
        line2: '',
      })
    });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value)
  }

}
