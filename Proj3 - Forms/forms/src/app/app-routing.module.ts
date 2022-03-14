import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxTextComponent } from './checkbox-text/checkbox-text.component';
import { DynamicExampleComponent } from './dynamic-example/dynamic-example.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { EndPageComponent } from './end-page/end-page.component';
import { FormComponent } from './form/form.component';
import { GroupComponent } from './group/group.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { Modal2Component } from './modal2/modal2.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"", component:FormComponent},
  {path:"end", component:EndPageComponent},
  {path:"popup", component:PopupDialogComponent},
  {path:"modal", component:ModalComponentComponent},
  {path:"modal2", component:Modal2Component},
  {path:"group", component:GroupComponent},
  {path:"form2", component:CheckboxTextComponent},
  {path:"dynamic", component:DynamicFormComponent},
  {path:'dynamic-ex', component:DynamicExampleComponent},
  {path:'stepper', component:StepperComponent},
  {path:'table', component:TableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
