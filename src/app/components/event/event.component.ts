import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../../shared/Services/EventService/event.service";
import {Event} from "../../shared/Models/comment";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationComponent} from "../confirmation/confirmation.component";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  forum :any
  ListEvent : Event[]
  place:any =''

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
      console.log(this.ListEvent)
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
}
