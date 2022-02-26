import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-entry-other',
  templateUrl: './dynamic-entry-other.component.html',
  styleUrls: ['./dynamic-entry-other.component.scss']
})
export class DynamicEntryOtherComponent implements OnInit {
  public questionForm: any
  // public arrAnswers: any;

  constructor(private controlContainer: ControlContainer,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.questionForm = this.controlContainer.control;
    

    // this.getAllAnswers().push(this.formBuilder.group({ 0:'BAD OPTION',})
    // this.getAllAnswers().push(this.formBuilder.group({ 1: 'GOOD OPTION'})

    // console.log(this.arrAnswers)
    console.log(this.getAllAnswers().controls)
    console.log(this.getAllAnswers().controls[0])
    // console.log(this.getAllAnswers().controls[0].get('value'))
    console.log(this.getAllAnswers().controls[0].value)

    // // this.getAllAnswers();
    // this.arrAnswers = this.getAllAnswers()
    // // this.arrAnswers = this.getAllAnswers().getRawValue();
    // console.log(this.arrAnswers)
    // console.log(typeof this.arrAnswers)
  }


  getAllAnswers() {
    // console.log(this.questionForm.get('answers'))
    // console.log(this.questionForm.get('answers').getRawValue())
    return this.questionForm.get('answers') as FormArray
  }



}
