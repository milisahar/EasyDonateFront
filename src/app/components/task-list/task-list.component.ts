import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'app/shared/Models/Task';
import { TaskService } from 'app/shared/Services/TaskService/task.service';
import { Router } from '@angular/router';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { AddCheckPointComponent } from '../add-check-point/add-check-point.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { AddHelpDemandComponent } from '../add-help-demand/add-help-demand.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  listTask : any
  first =0
  rows=2
  numberOfTasks : number = 0

  task : Task;

  p:number =1

  constructor(private taskService : TaskService , 
    private router : Router ,
    private dialogRef : MatDialog ) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(){
    return this.taskService.getAllTasks().subscribe(res => this.listTask = res)
  }

  onDeletTask( task : Task){
    if (confirm ("Are you sure that you want to delete this task? \n PS : by deleting this task all the related check points and help demands will be utomatically deleted within !")) {
      this.taskService.deleteTask(task.id).subscribe(()=> {
        this.router.navigate(['/tasks']).then (() => {
          window.location.reload()
        })
      })
    }
  }


  openDialog(id :any){
    this.dialogRef.open(TaskDetailsComponent , {
      width : '86%' , height : '80%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id,
      
    })
  }
  uploadCheckPoint(id :any){
    this.dialogRef.open(AddCheckPointComponent , {
      width : '86%' , height : '80%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id,
      
    })
  }
  openAddingTask(){
    this.dialogRef.open(AddTaskComponent , {
      width : '50%' , height : '60%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms'
      
    })
  }
  askForHelp(id:any){
    this.dialogRef.open(AddHelpDemandComponent , {
      width : '50%' , height : '60%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id
      
    })
  }
  makrAsDone(id:any){
    if (confirm ("Are you sure that you want to mark this task as done ? \n "+
    "Remember this act is not reversable !")) { 
     this.taskService.markAsDone(id).subscribe(()=> {
      this.router.navigate(['/tasks']).then (() => {
        window.location.reload()
      })
    })
      }
     
  }
 
}

