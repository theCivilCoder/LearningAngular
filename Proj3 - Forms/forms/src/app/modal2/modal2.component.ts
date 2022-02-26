import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: `./modal-popup.component.html`
})
export class NgbdModalContent {
  @Input() name = "";
  @Input() newUser: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  passBack() {
    this.passEntry.emit(this.newUser);
    this.activeModal.close(this.newUser);
  }
}

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {
  private newUser = {
    name:'aa',
    age:'1',
    sex:'M',
    level:'10'
  }


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, {size:'xl'});
    modalRef.componentInstance.name = '--from input name--';
    modalRef.componentInstance.newUser = this.newUser;

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        console.table(result);
      }
    });
  }

}
