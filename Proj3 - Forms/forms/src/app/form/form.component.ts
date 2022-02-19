import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  arrEmails = [
    {address:'email1', name:'a', gender: 'M', company:'ABC'},
    {address:'email2', name:'b', gender: 'M', company:'ABC'},
    {address:'email3', name:'c', gender: 'M', company:'ABC'},
  ];

  arrSelection = Array(this.arrEmails.length).fill(false);

  constructor( ) {   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value.year)

    let arrRecipients: Object[] = [];
    this.arrSelection.forEach( (isChecked, index) =>{
      if (isChecked) arrRecipients.push(this.arrEmails[index])
    } )

    console.log("clicked on submit")
    console.log(arrRecipients)
  }

  toggle(i: number){
    this.arrSelection[i] = !this.arrSelection[i]
    console.log(this.arrSelection)
  }

  
}
