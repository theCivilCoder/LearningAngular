import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicEntryComponent } from '../dynamic-entry/dynamic-entry.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  //FormGroup for saving inputs on each repitition of the entry component
  public form: FormGroup = this.formBuilder.group({})  

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({   
      questions: this.formBuilder.array([]) ,  
    });  
  }

  ngOnInit(): void {
  }

  getAllQuestions(){
    return this.form.get('questions') as FormArray
  }

  addNewEntry(){
    this.getAllQuestions().push(
      this.formBuilder.group({
        'question':'',
        'answer':''
      })
    )
  }

  deleteSingleEntry(idx: number){
    this.getAllQuestions().removeAt(idx);  
  }
  

  displayForm() {
    console.log(this.form.getRawValue())
  }

}
