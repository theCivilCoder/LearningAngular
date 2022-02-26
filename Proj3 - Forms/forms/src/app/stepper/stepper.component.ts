import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  stepper:Stepper = new Stepper(document.querySelector('#stepper')!, {
    linear: false,
    animation: true
  })


  constructor() { 
    
    
  }

  ngOnInit(): void {
    
  }

}
