import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox-text',
  templateUrl: './checkbox-text.component.html',
  styleUrls: ['./checkbox-text.component.scss']
})
export class CheckboxTextComponent implements OnInit {
  gridRadios = '';
  other = '';
  checkedOther = false;

  constructor( ) {   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log("clicked on submit")
    if (this.gridRadios == 'other') this.gridRadios = this.other
    console.log('gridradios = '+this.gridRadios)
    console.log('other = '+this.other)
  }

  checkRadio(){
    console.log('checkRadio() function called')
    this.checkedOther=true;

    // let radioOther = document.getElementById('gridRadios4') 
    // radioOther.checked = true;
  }

  resetRadio(){
    this.checkedOther=false;
  }

 

}
