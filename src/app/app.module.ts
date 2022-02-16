import {CUSTOM_ELEMENTS_SCHEMA, NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TaskComponent } from './task/task.component';

const importedMatComponents = [MatToolbarModule, MatIconModule, MatCardModule, DragDropModule ]

@NgModule({
  schemas:[ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TaskComponent,
  ],    
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatCardModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
