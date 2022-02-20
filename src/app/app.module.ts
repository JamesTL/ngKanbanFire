import {CUSTOM_ELEMENTS_SCHEMA, NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
 const importedMatComponents = [ MatToolbarModule, MatIconModule, MatCardModule, DragDropModule, MatButtonModule, MatDialogModule, MatInputModule]

@NgModule({
  schemas:[ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
  ],    
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
   ...importedMatComponents 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
