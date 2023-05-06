import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../../shared/Services/EventService/event.service";
import {Event} from "../../shared/Models/comment";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationComponent} from "../confirmation/confirmation.component";
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
export class eventCalendar{
  title:string
  date:Date
}
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  forum :any
  date:any
  tab:boolean = false
  ListEvent : Event[]
  place:any =''
  eventCalendar: eventCalendar[] = []

  searchtext:any
  constructor( private router : Router , private eventSetvice : EventService,public dialog: MatDialog) { }

  ngOnInit(): void {
   this.getAllevents()
  }

  toggleBadgeVisibility() {

  }
  getAllevents(){
    this.eventSetvice.getListEvent().subscribe(res=>{
      this.ListEvent = res
      for (var i = 0; i < res.length; i++) {
        const e = new eventCalendar()
          e.date = res[i].eventDate
          e.title = res[i].title
          this.eventCalendar.push(e)
      }
      console.log(this.ListEvent)
      this.calendarOptions = {
        events: this.eventCalendar,
      };
    })
  }
  addevent(){
    this.router.navigate(['CreateEvent'])
  }
  getArticle(){

  }
  deleteArticle(u: any){
}

  newForum() {

  }
  getTag(){
  }

  gettagDetails(){

  }

  getTagArticles(id:number){

  }
  get(i: number){


  }
  updateEvent(id:any){
    this.router.navigate(['update-Event',id])
  }
  showComments(id:any){
    this.router.navigate(['details-Event',id])
  }
  deleteEvent(id:any){
    let dialogRef =  this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.eventSetvice.deleteEvent(id).subscribe(res=>{
          this.getAllevents()
          console.log("done")
        })
      }
      else console.log('nope');
    });
  }


  findByPlace(){
    this.eventSetvice.findByEventPlace(this.place).subscribe(res=>{
      console.log(res)
      this.ListEvent=res
    })
  }
  findByDate(){
    this.eventSetvice.findByEventDate(this.date).subscribe(res=>{
      console.log(res)
      this.ListEvent=res
    })
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
 // MUST ensure `this` context is maintained
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  hidetab() {
  this.tab=true
  }
  hideCalender(){
    this.tab=false
  }
}
