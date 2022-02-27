import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
    console.log(this.questionForm.getRawValue())
  }


  getAllAnswers() {
    // console.log(this.questionForm.get('answers'))
    // console.log(this.questionForm.get('answers').getRawValue())
    return this.questionForm.get('answers') as FormArray
  }

  showAnswers() {
    console.log(this.questionForm.get('answers').getRawValue())
    // console.log(this.getAllAnswers().controls)
    // console.log(this.getAllAnswers().controls[0])
  }

  addInput(){
    this.getAllAnswers().push(
      // this.formBuilder.control({'answer':''})
      this.formBuilder.group({
        'answer':''
      })

    )
    console.log('this.getAllAnswers().controls')
    console.log(this.getAllAnswers().controls)
    console.log(this.getAllAnswers().controls[0])
    // console.log(this.getAllAnswers())
    // this.getAllQuestions().push(
    //   this.formBuilder.group({
    //     'question':'',
    //     'answers':[],
    //     'category':'',
    //     'categoryGroup':'',
    //     'weight':'',
    //   })
  }

  deleteOption(optionIdx: number){
    this.getAllAnswers().removeAt(optionIdx)
  }

  getOneFormGroup(i: number){
    console.log('in getOne')
    console.log(this.getAllAnswers().controls[i].value)
    return this.getAllAnswers().controls[i] as FormGroup;
  }


}
