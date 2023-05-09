import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDemand } from 'app/shared/Models/HelpDemand';
import { HelpDemandService } from 'app/shared/Services/HelpDemandService/help-demand.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from 'app/shared/Models/user';
import { Task } from 'app/shared/Models/Task';
import { TaskService } from 'app/shared/Services/TaskService/task.service';
import { HelpDemandDetailsComponent } from '../help-demand-details/help-demand-details.component';


@Component({
  selector: 'app-help-demand-list',
  templateUrl: './help-demand-list.component.html',
  styleUrls: ['./help-demand-list.component.scss']
})
export class HelpDemandListComponent implements OnInit {

  search:string ="";
  numberOfDemands: number = 0;
  listhelpDemand: any;
  listhelpDemandNew: any;
  listhelpDemandOld: any;
  helpDemand: HelpDemand;
  sender !: User[];
  task !: Task ;
  someSubscription: any;
  waiting : any | HelpDemand[];
  p=1;
  itemsPerPage : number = 1;
  dateD !: Date;
  localD: Date = new Date();
  constructor(private taskService :TaskService, private helpDemandService: HelpDemandService, private router: Router,
    private dialogRef: MatDialog , private route : ActivatedRoute) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.someSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Here is the dashing line comes in the picture.
          // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
          this.router.navigated = false;
        }
      });
    }

  ngOnInit(): void {
    this.getAllHelpDemands();

  }

  resetPAge(){
    //we don't want to reuse route
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/helpDemands'],{
      relativeTo: this.route
    })
  }
  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  getAllHelpDemands() {
    return this.helpDemandService.getAllHelpDemandsOrderdByDateFromOldest().subscribe(
      res => {
        this.listhelpDemand = res;
        this.numberOfDemands = this.listhelpDemand.length;
          
       
      }
    )
  }

  onDeleteHelpDemand(helpDemand: HelpDemand) {
    if (confirm(
      "Are you sure that you want to delete this help demand? \n Just remember that this delete is permanent !"
      )) {
     /* this.helpDemandService.deleteHelpDemand(helpDemand.id).subscribe(() => {
        this.router.navigate(['/help-demand-list']).then(() => {
          window.location.reload()
        })
      })*/
      this.helpDemandService.deleteHelpDemand(helpDemand.id).subscribe ()
      this.resetPAge();
    }
  }

  onUpgradeTask(helpDemand : HelpDemand) {
    if (confirm("Are you sure that you want to transform this help demand into a task? \n Just remember that this operation is permanent !")) {
      
      this.helpDemandService.upgradeHelpDemand(helpDemand.id).subscribe(() => {
        this.router.navigate(['/tasks']).then(() => {
          window.location.reload()
        })
      })
    }
  }
  respondToHelpRequest(id : any , helpDemand : HelpDemand) {
    if (confirm("Respond to the request?\n By conferming this request will transform into  a task assigned to you that you will find in the tasks' list.\n It's creation date is today and will be ending in five days ! \n Just remember that this operation is not reversable !")) {
      
      this.helpDemandService.respondTo(id,helpDemand.id).subscribe(() => {
        this.router.navigate(['/tasks']).then(() => {
          window.location.reload()
        })
      })
    }
  }

  renderPage(event: number) {
    this.p = event;
    this.getAllHelpDemands();
  }


  onOrderNewst(){
     this.helpDemandService.getAllHelpDemandsOrderedByDateFromNewest().subscribe(
      res => {this.listhelpDemandNew=res; 
      }
    )
    this.resetPAge()
  }
  onOrderoldest(){
     this.helpDemandService.getAllHelpDemandsOrderdByDateFromOldest().subscribe(
      res => {this.listhelpDemandOld=res;
        
      }
    )
    this.resetPAge()
  }
  openDialog(id :any){
    this.dialogRef.open(HelpDemandDetailsComponent , {
      width : '80%' , height : '70%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id,
      
    })
  }
  openAdding(id :any){
    this.dialogRef.open(HelpDemandDetailsComponent , {
      width : '86%' , height : '80%',
      enterAnimationDuration : '1000ms',
      exitAnimationDuration :'1700ms',
      data : id,
      
    })
  }

  NotRespondedTo(){
    return this.helpDemandService.getAllHelpDemandsWaiting().subscribe(
      res => {
        this.listhelpDemand = res ; 
        this.resetPAge()
      }
    )
    
}

toLower(txt: string){console.log(this.dateD)
  return txt.toLowerCase()
  
}
doescontain(txt: string, txt2:string){
  return txt.toLowerCase().includes(txt2.toLowerCase())
  
}






}