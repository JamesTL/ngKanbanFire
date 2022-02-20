import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task/task';


export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
  /** keeping cpu y od orginal  */
  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    // inject data object - form open dialof dunction -  data.task
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}


 

  cancel(): void {
    // not saving but  closing - we reset data which may have been changed by user with reference to the backupvar
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;

    this.dialogRef.close(this.data);
  }
}