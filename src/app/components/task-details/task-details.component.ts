import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckPoint } from 'app/shared/Models/CheckPoint';
import { User } from 'app/shared/Models/user';
import { CheckPointService } from 'app/shared/Services/CheckPointService/check-point.service';
import { TaskService } from 'app/shared/Services/TaskService/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: any;
  assignedTo: User | any;
  checkPointList: CheckPoint[] = [];
  id: number = 0;
  urgencylist: any;
  urgencySelect: any;
 
  checkNbre: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService, private router: Router,
    private activateRoute: ActivatedRoute, private ref: MatDialogRef<TaskDetailsComponent>,
    private checkPointService: CheckPointService) {

  }

  ngOnInit(): void {

    this.taskService.getTask(this.data).subscribe(res => this.task = res);
    this.taskService.getAssignedTo(this.data).subscribe(user => this.assignedTo = user);
    this.checkPointService.getCheckPointsByTaskId(this.data).subscribe(res => 
      {this.checkPointList = res ;
      this.checkNbre = this.checkPointList.length;
    console.log("hedhaaaaa =========== " + this.checkNbre);});
    
    // this.checkPointService.getCheckPointsByTaskId(this.data).subscribe(ck => this.checkPointList = ck);

  }


  onupdateTask() {
    this.id = this.task.id;
    console.log("hedhi l'id " + this.id);
    this.task.startingDate = new Date();
    this.task.assignedTo = this.assignedTo;
    this.task.checkPoints = this.checkPointList;
    this.taskService.updateTask(this.id, this.task).subscribe(
      offre => {
        this.router.navigate(['/tasks']).then(() => {
          window.location.reload()
        })
      }
    );

  }


  onClosepopup() {
    this.ref.close();
  }
}
