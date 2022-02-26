import { Injectable } from '@angular/core';
import Stepper from "bs-stepper";

@Injectable({
  providedIn: 'root'
})
export class NewRequestService {
  private stepper: any;

  // Keep track of which pages have been vistied
  private visitedPages: boolean[] =[];

  initializeStepper() {
    console.log('initialize stepper')
    this.visitedPages = new Array(14).fill(false)
    // Set status of page 1 to true
    this.visitedPages[0] = true;

    if (this.stepper) this.stepper.destroy()

    // Set the stepper parameters
    this.stepper = new Stepper(document.querySelector('#stepper')!, {
      linear: false,
      animation: true
    })
    this.stepper.reset()
    this.stepper.to(3)
  }

  getPageStatus(pageNum: number) {
    // Get the visited page status
    return this.visitedPages[pageNum - 1];
  }

  updatePageStatus(pageNum: number) {
    // Update status to true once page is visited
    this.visitedPages[pageNum - 1] = true;
  }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }
}