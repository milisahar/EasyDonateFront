import { Component, OnInit } from '@angular/core';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import {FundraiserService} from "../../shared/Services/FundraiserService/fundraiser.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
declare var $: any;
interface status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-fundraiser',
  templateUrl: './add-fundraiser.component.html',
  styleUrls: ['./add-fundraiser.component.scss']
})
export class AddFundraiserComponent implements OnInit {
  fundraiserForm: FormGroup;
  fundraiser:any
  pendingStatus:any
  id:any
  a : any
  status: status[] = [
    {value: 'DONE', viewValue: 'Done'},
    {value: 'NOT_YET', viewValue: 'Not Yet'},
    {value: 'INPROGRESS', viewValue: 'In Progress'},
  ];


  constructor(private fb: FormBuilder,private route: ActivatedRoute , private router : Router,private fs: FundraiserService) { }
  showNotification(from, align){
    const type = ['success'];

    const color = Math.floor(0);

    $.notify({
      icon: "notifications",
      message: "fundraiser is added !"

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
    this. createform();
  }
  addFundraiser(){
    console.log(this.fundraiserForm.get('status').value)
    this.fundraiser.title =  this.fundraiserForm.get('title').value
    this.fundraiser.goal = this.fundraiserForm.get('goal').value
    this.fundraiser.description = this.fundraiserForm.get('description').value
    this.fundraiser.pendingStatus = this.fundraiserForm.get('status').value
    this.fundraiser.target = this.fundraiserForm.get('target').value
    console.log(this.fundraiser)
    this.fs.addFundraiser(this.fundraiser).subscribe(res=>{
      this.showNotification('top','right')
      this.router.navigate(['fundraiser'])
      console.log(res)
    })
  }
  onSubmit(){
    this.addFundraiser();
    console.log(this.fundraiser)
  }
  showF(){
    console.log(this.fundraiser)
  }
  createform(){
    this.fundraiserForm = this.fb.group({
      title: [''],
      goal:[''],
      description:[''],
      status:['INPROGRESS'],
      target:['']

    })
  }
}
