import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'app/shared/Models/Task';
import { User } from 'app/shared/Models/user';
import { TaskService } from 'app/shared/Services/TaskService/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

    task: any = null;
    assignedTo: User | any;
    id: number = 0;
    urgencylist: any;
    urgencySelect: any;
  
    checkNbre: number = 0;
    constructor(private taskService: TaskService, private router: Router,
      private activateRoute: ActivatedRoute, private ref: MatDialogRef<AddTaskComponent>,
    ) {
  
    }
  
    ngOnInit(): void {
      this.task = new Task()
  
      // this.checkPointService.getCheckPointsByTaskId(this.data).subscribe(ck => this.checkPointList = ck);
  
    }
  
  
    onAddTask() {
      this.id = this.task.id;
      console.log("hedhi l'id " + this.id);
      // this.task.startingDate = new Date();
      if (this.task.endingingDate < this.task.startingDate) {
        if (confirm("OOoops ! \n Your are probably mistaken between the ending and starting date would you please enter an endinf date supperior to the starting one !")) { }
      }
      if (this.task== null || this.task.endingingDate===null || this.task.startingDate===null || this.task.title==="" || this.task.urgency==="") {
        if (confirm("Please fill all the required informations !")) { }
      }
      this.task.assignedTo = this.assignedTo;
      this.taskService.addTaskByUser(1, this.task).subscribe(
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