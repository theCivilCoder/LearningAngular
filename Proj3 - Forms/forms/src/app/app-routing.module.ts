import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndPageComponent } from './end-page/end-page.component';
import { FormComponent } from './form/form.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

const routes: Routes = [
  {path:"", component:FormComponent},
  {path:"end", component:EndPageComponent},
  {path:"popup", component:PopupDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
