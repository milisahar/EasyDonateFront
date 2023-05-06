import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fundraiser } from 'app/shared/Models/fundraiser';

declare var $: any;
import { FundraiserService } from 'app/shared/Services/FundraiserService/fundraiser.service';
interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-fundraiser',
  templateUrl: './update-fundraiser.component.html',
  styleUrls: ['./update-fundraiser.component.scss']
})
export class UpdateFundraiserComponent implements OnInit {
  fundraiserForm: FormGroup;
  fundraiser:any
  pendingStatus:any
  id:any
  status: status[] = [
    {value: 'DONE', viewValue: 'Done'},
    {value: 'NOT_YET', viewValue: 'Not Yet'},
    {value: 'INPROGRESS', viewValue: 'In Progress'},
  ];
  constructor(private fb: FormBuilder,private route: ActivatedRoute , private router : Router,private fundraiserService: FundraiserService) {}
  showNotification(from, align){
    const type = ['success'];

    const color = Math.floor(0);

    $.notify({
        icon: "notifications",
        message: "fundraiser updated !"

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
    this.fundraiser = new Fundraiser()
    this. createform()
    this.route.params.subscribe(params => {
      this.fundraiserService.getFundraiserById(params['id']).subscribe(res=>{
        this.id=res.fundraiser_id
        this.fundraiserForm.get('title').setValue(res.title)
        this.fundraiserForm.get('goal').setValue(res.goal)
        this.fundraiserForm.get('description').setValue(res.description)
        this.fundraiserForm.get('status').setValue(res.pendingStatus)
        this.fundraiserForm.get('target').setValue(res.target)
       
      })
    });
  }
  
  
  createform(){
    this.fundraiserForm = this.fb.group({
      title: [''],
      goal:[''],
      description:[''],
      status:[''],
      target:['']
    
  })
}

updatefundraiser(){
  console.log(this.fundraiserForm.get('status').value)
  this.fundraiser.title =  this.fundraiserForm.get('title').value
  this.fundraiser.goal = this.fundraiserForm.get('goal').value
  this.fundraiser.description = this.fundraiserForm.get('description').value
  this.fundraiser.pendingStatus = this.fundraiserForm.get('status').value
  this.fundraiser.target = this.fundraiserForm.get('target').value
  console.log(this.fundraiser)
  console.log(this.fundraiser.fundraiser_id)
  this.fundraiserService.updateFundraiser(this.fundraiser,this.id).subscribe(res=>{
    this.showNotification('top','right')
    this.router.navigate(['fundraiser'])
  })
}

}

