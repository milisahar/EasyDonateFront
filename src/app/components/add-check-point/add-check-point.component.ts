import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { CheckPoint } from 'app/shared/Models/CheckPoint';
import { CheckPointService } from 'app/shared/Services/CheckPointService/check-point.service';
import { TaskService } from 'app/shared/Services/TaskService/task.service';

@Component({
  selector: 'app-add-check-point',
  templateUrl: './add-check-point.component.html',
  styleUrls: ['./add-check-point.component.scss']
})
export class AddCheckPointComponent implements OnInit {


  task : any;
  checkPoint !: CheckPoint
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private checkPointService : CheckPointService,
  private taskService : TaskService,
  private router: Router,
  private activateRouter : ActivatedRoute,
  private ref: MatDialogRef<AddCheckPointComponent>) { }


  addCheckPoint(){
    
    if(this.checkPoint.title === "" || this.checkPoint.description ===""){
      if (confirm("Please fill all the required informations !")) { }
    }
    this.task = this.taskService.getTask(this.data)
    this.checkPoint.dateDeCreation = new Date();
    this.checkPoint.task = this.task;
    this.checkPointService.addCheckPoint(this.data,this.checkPoint).subscribe(
      res => {
        this.router.navigate(['/tasks']).then(() => {
          window.location.reload()})
      }
    )
  }

  onClosepopup() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.checkPoint = new CheckPoint();
    
    console.log(this.data);
  }

}

