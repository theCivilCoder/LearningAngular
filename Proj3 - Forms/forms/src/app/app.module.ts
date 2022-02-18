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
import { Modal2Component } from './modal2/modal2.component';
import { GroupComponent } from './group/group.component';
import { GroupChildComponent } from './group/group-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EndPageComponent,
    PopupDialogComponent,
    Modal2Component,
    GroupComponent,
    GroupChildComponent
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
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents //depracated
})
export class AppModule { }
