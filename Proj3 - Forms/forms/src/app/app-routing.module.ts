import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndPageComponent } from './end-page/end-page.component';
import { FormComponent } from './form/form.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

const routes: Routes = [
  {path:"", component:FormComponent},
  {path:"end", component:EndPageComponent},
  {path:"popup", component:PopupDialogComponent},
  {path:"modal", component:ModalComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
