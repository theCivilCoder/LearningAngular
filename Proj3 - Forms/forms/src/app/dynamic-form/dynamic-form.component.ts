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

  //array of index numbers used in ngFor to determine number of components 
  arrEntries: number[] = [];

  //array storing the formGroupName for each repitition of the entry component
  arrFormGroupNames: string[] = [];

  //FormGroup for saving inputs on each repitition of the entry component
  public form: FormGroup = this.formBuilder.group({})
  public updatedForm: FormGroup = this.formBuilder.group({})

  

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
    // console.log('the current form: ')
    // console.log(this.form.getRawValue())
    // console.log(this.arrFormGroupNames)
  }

  deleteSingleEntry(idx: number){
    console.log('idx passed in is '+idx.toString()+'current raw form is:')

    let currRawForm = this.form.getRawValue()
    console.log(currRawForm)

    //idx to identify which repeated entry to exclude
    let idxCounter = 0;
    //idx to keep the groupName in sequential order so the names remain Q1, Q2, Q3, etc
    let idxGroupName = 0;

    //boolean used to identify which controlform to start updating from
    let updatedPoint = false;



    for (let key in currRawForm){
      //looking at control forms on the formGroup after the deleted form
      if (updatedPoint){
        this.form.setControl(this.arrFormGroupNames[idxGroupName], this.formBuilder.group(
          currRawForm[key]
        ))
        idxGroupName++
      }


      if (idxCounter == idx) {
        updatedPoint=true;
        idxGroupName = idxCounter;
      } 
      
      idxCounter++      
    }

    // //pop one entry out of the arrays storing the indexes and the names
    console.log('removign control for ' + this.arrFormGroupNames[this.arrFormGroupNames.length-1])
    this.form.removeControl(this.arrFormGroupNames[this.arrFormGroupNames.length-1])
    this.arrFormGroupNames.pop()
    this.arrEntries.pop()
    
    this.index--

    console.log(this.arrFormGroupNames)  
    console.log('latest form is :')
    console.log(this.form.getRawValue()) 
  }

  displayForm() {
    console.log(this.form.getRawValue())
    console.log(this.arrEntries)
    console.log(this.arrFormGroupNames)
  }



}
