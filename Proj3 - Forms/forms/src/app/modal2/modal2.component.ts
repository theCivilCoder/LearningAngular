import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: `./modal-popup.component.html`
})
export class NgbdModalContent {
  @Input() name = "";

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, {size:'xl'});
    modalRef.componentInstance.name = '--from input name--';
  }

}
