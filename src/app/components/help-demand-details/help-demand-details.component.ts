import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HelpDemandService } from 'app/shared/Services/HelpDemandService/help-demand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'app/shared/Services/TaskService/task.service';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-help-demand-details',
  templateUrl: './help-demand-details.component.html',
  styleUrls: ['./help-demand-details.component.scss']
})
export class HelpDemandDetailsComponent implements OnInit {

  helpDemand : any;
  assignedTo : any;
  task : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialog , 
  private taskService: TaskService ,private helpDemandService: HelpDemandService, private router: Router,
  private activateRoute: ActivatedRoute, private ref: MatDialogRef<HelpDemandDetailsComponent>) 
  {

}


  ngOnInit(): void {
    this.helpDemandService.getHelpDemand(this.data).subscribe(
      res => {this.helpDemand = res;
      console.log(this.helpDemand.task.id)}
    );
    this.helpDemandService.getSender(this.data).subscribe(
      res => {this.assignedTo = res;
      console.log(this.assignedTo.id)}
    )
    this.taskService.getByHelpDemand(this.data).subscribe(
      res =>{this.task=res}
    )
  }
  openDialog(id :any){
    this.dialogRef.open(HelpDemandDetailsComponent , {
      width : '86%' , height : '70%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id,
      
    })
  }
  openDialogTask(id :any){
    this.dialogRef.open(TaskDetailsComponent , {
      width : '86%' , height : '80%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id,
      
    })
  }
  onClosepopup (){
    this.ref.close();
  }

}
