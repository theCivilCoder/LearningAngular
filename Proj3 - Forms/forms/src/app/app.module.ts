import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EndPageComponent,
    PopupDialogComponent,
    Modal2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents //depracated
})
export class AppModule { }
