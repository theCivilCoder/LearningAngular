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

  public arrEntryTypes: string[] = [];

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
    this.arrEntryTypes.push('std')
  }

  addNewEntryOther(){
    this.getAllQuestions().push(
      this.formBuilder.group({
        'question':'',
        // 'answers': this.formBuilder.array([]),
        'answers': this.formBuilder.array(['BAD OPTION', 'GOOD OPTION']),
        // 'answers': this.formBuilder.array([
        //   this.formBuilder.group({
        //     0:'BAD OPTION'
        //   }),
        //   this.formBuilder.group({
        //     1:'GOOD OPTION'
        //   }),
        // ]),
        'selectedAnswer':'',
        'selectedAnswerMC':''
      })
    )
    this.arrEntryTypes.push('other')

  }

  deleteSingleEntry(idx: number){
    this.getAllQuestions().removeAt(idx);  
  }
  

  displayForm() {
    console.log(this.form.getRawValue())
  }

  

}
