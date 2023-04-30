import { Component, OnInit } from '@angular/core';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import { FundraiserService } from 'app/shared/Services/FundraiserService/fundraiser.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'app/components/confirmation/confirmation.component';
declare var $: any;
@Component({
  selector: 'app-fundraiser-list',
  templateUrl: './fundraiser-list.component.html',
  styleUrls: ['./fundraiser-list.component.scss']
})
export class FundraiserListComponent implements OnInit {
  fundraisers : Fundraiser[]=[];

  constructor( private fundraiserService: FundraiserService,public dialog: MatDialog, private router : Router) {}
    showNotification(from, align){
      const type = ['success'];

      const color = Math.floor(0);

      $.notify({
          icon: "notifications",
          message: "fundraiser deleted !"

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
   

  ngOnInit(): void {
    this.getFundraisers();
  }
  private getFundraisers() {
    this.fundraiserService.getListFundraisers().subscribe( data => {
      this.fundraisers = data;
    })
  }
  deleteFundraiser(id:number){
    let dialogRef =  this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.fundraiserService.deleteFundraiser(id).subscribe( data =>{
          console.log(data);
          this.getFundraisers();
          this.showNotification('top','right')
        })
      }
      else console.log('nope');
     
    });
  }
  updateFundraiser(id:number){
    this.router.navigate(['update-fundraiser',id])
  }

}
