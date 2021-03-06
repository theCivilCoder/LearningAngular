import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { EndPageComponent } from './end-page/end-page.component';
import { DataTablesModule } from "angular-datatables";
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Modal2Component, NgbdModalContent } from './modal2/modal2.component';
import { GroupComponent } from './group/group.component';
import { GroupChildComponent } from './group/group-child.component';
import { CheckboxTextComponent } from './checkbox-text/checkbox-text.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicEntryComponent } from './dynamic-entry/dynamic-entry.component';
import { DynamicExampleComponent } from './dynamic-example/dynamic-example.component';
import { StepperComponent } from './stepper/stepper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicEntryOtherComponent } from './dynamic-entry-other/dynamic-entry-other.component';
import { McOptionComponent } from './mc-option/mc-option.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EndPageComponent,
    PopupDialogComponent,
    Modal2Component,
    GroupComponent,
    GroupChildComponent,
    NgbdModalContent,
    CheckboxTextComponent,
    DynamicFormComponent,
    DynamicEntryComponent,
    DynamicExampleComponent,
    StepperComponent,
    DynamicEntryOtherComponent,
    McOptionComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents //depracated
})
export class AppModule { }
