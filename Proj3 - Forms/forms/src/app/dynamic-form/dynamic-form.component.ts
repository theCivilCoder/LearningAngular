import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicEntryComponent } from '../dynamic-entry/dynamic-entry.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  index = 0;
  idxString = '';
  arrEntries: number[] = [];
  arrFormGroupNames: string[] = [];
  // arrEntryPartNames: string[] = ['Question', 'Category', 'Category Group', 'Weight'];

  public form: FormGroup = this.formBuilder.group({})

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addNewEntry(){
    // console.log('latest num is '+num.toString)
    this.arrEntries.push(this.index)
    this.index++
    // console.log(('Q'+this.index.toString()))
    this.arrFormGroupNames.push('Q'+this.index.toString())
    let idxString = this.index.toString()
    this.form.addControl(('Q'+idxString), this.formBuilder.group({
      'question':'',
      'category':'',
      'categoryGroup':'',
      'weight':'',
      'answer':''
    }))
    console.log('the current form: ')
    console.log(this.form.getRawValue())
    // console.log(this.arrFormGroupNames)
  }


}
