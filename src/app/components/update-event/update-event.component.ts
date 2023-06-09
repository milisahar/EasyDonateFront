import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FundraiserService} from "../../shared/Services/FundraiserService/fundraiser.service";
import {Fundraiser} from "../../shared/Models/fundraiser";
import {EventService} from "../../shared/Services/EventService/event.service";
import {Event} from "../../shared/Models/comment";
declare var $: any;
interface type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {
  eventForm: FormGroup;
  event:any
  pendingStatus:any
  id:any
  type: type[] = [
    {value: 'GALA', viewValue: 'Gala'},
    {value: 'MEDIATIQUE', viewValue: 'Mediatique'},
    {value: 'ENCHERES', viewValue: 'Encheres'},
    {value: 'CONCERT', viewValue: 'Concert'},
  ];
  constructor(private fb: FormBuilder,private route: ActivatedRoute , private router : Router,private eventService: EventService) {}
  showNotification(from, align){
    const type = ['success'];

    const color = Math.floor(0);

    $.notify({
      icon: "notifications",
      message: "Event Created !"

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
    this.event = new Event()
    this. createform()
    this.route.params.subscribe(params => {
      this.id=params['id']
      console.log(this.id)
      this.eventService.getEvent(params['id']).subscribe(res=>{

        this.event=res
        this.eventForm.get('title').setValue(res.title)
        this.eventForm.get('place').setValue(res.place)
        this.eventForm.get('description').setValue(res.description)
        this.eventForm.get('capacity').setValue(res.capacity)
        this.eventForm.get('duration').setValue(res.duration)
        this.eventForm.get('date').setValue(res.eventDate)
        this.eventForm.get('type').setValue(res.eventType)


      })
    });
  }


  createform(){
    this.eventForm = this.fb.group({
      title: [''],
      place:[''],
      description:[''],
      status:[''],
      capacity:[''],
      type:[''],
      duration:[''],
      date:['']

    })
  }

  createEvent(){
    this.event.title = this.eventForm.get('title').value
    this.event.place = this.eventForm.get('place').value
    this.event.description = this.eventForm.get('description').value
    this.event.eventType = this.eventForm.get('type').value
    this.event.duration = this.eventForm.get('duration').value
    this.event.eventDate = this.eventForm.get('date').value
    this.event.capacity = this.eventForm.get('capacity').value
    this.eventService.updateEvent(this.event , this.id).subscribe(res=>{
      this.router.navigate(['event'])
      this.showNotification('top','right')
    })


  }
}
