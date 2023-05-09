import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { HelpDemand } from 'app/shared/Models/HelpDemand';
import { HelpDemandService } from 'app/shared/Services/HelpDemandService/help-demand.service';
import { TaskService } from 'app/shared/Services/TaskService/task.service';
@Component({
  selector: 'app-add-help-demand',
  templateUrl: './add-help-demand.component.html',
  styleUrls: ['./add-help-demand.component.scss']
})
export class AddHelpDemandComponent implements OnInit {


  task : any;
  helpDemand : HelpDemand
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private helpDemandService : HelpDemandService,
  private taskService : TaskService,
  private router: Router,
  private activateRouter : ActivatedRoute,
  private ref: MatDialogRef<AddHelpDemandComponent>) { }


  addHelpDemand(){
    
    if(this.helpDemand.title === "" || this.helpDemand.content ===""){
      if (confirm("Please fill all the required informations !")) { }
    }
    this.task = this.taskService.getTask(this.data)
    this.helpDemand.dateDeCreation = new Date();
    this.helpDemand.task = this.task;
    this.helpDemandService.addHelpDemand(this.data,this.helpDemand).subscribe(
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
    this.helpDemand= new HelpDemand();
    
    console.log(this.data);
  }
}
