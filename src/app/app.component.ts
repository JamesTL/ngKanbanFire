import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor (private dialog: MatDialog){}

  // drop(event: CdkDragDrop<Task[]|null>): void {
  drop(event: any): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  /** */
  newTask(): void {

    //  open new dialog  -  open instance assigned to dialogRef so we can ref contents and subscription
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      // inject data input object - empty task object - can ref task as key on results object when Dialog instance closed
      data: {
        task: {},
      },
    });

   // subscribe to  afterClosed Observable which emits on close of modal - 
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult|undefined) => {
        if (!result) {
          return;
        }
       // task data picked from Dialog instance result object and pushed to our todo list
        this.todo.push(result.task);
      });
  }

  // dbClick on individual item will trigger this function
  // opens a task dialog window with selected task data pre-populated
  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
      if (!result) {
        return;
      }
      
     // updated item 
      const dataList = this[list];
      const taskIndex = dataList.indexOf(task);
     
     // if delete task then delete (splice) at task index of replace a array index position
     
     if (result.delete) {
        dataList.splice(taskIndex, 1);
      } else {
        dataList[taskIndex] = task;
      }
    });
  }
}
