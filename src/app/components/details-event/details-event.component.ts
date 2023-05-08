import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FundraiserService} from "../../shared/Services/FundraiserService/fundraiser.service";
import {Comment, Event} from "../../shared/Models/comment";
import {EventService} from "../../shared/Services/EventService/event.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationComponent} from "../confirmation/confirmation.component";

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.scss']
})
export class DetailsEventComponent implements OnInit {
  content:any
  Comment:Comment
  eventComments: Comment[]
  event : Event
  listComment :any
  id:any
  constructor(private fb: FormBuilder,private route: ActivatedRoute , private router : Router,public dialog: MatDialog,private EventSerivce: EventService) {}

  ngOnInit(): void {
    this.Comment = new Comment()
    this.event = new Event()
    this.route.params.subscribe(params => {
      this.id=params['id']
      this.getComments()
    })

  }

  getComments(){
    this.EventSerivce.getEvent(this.id).subscribe(res=>{
      this.event=res
      this.listComment = this.event.eventComments
      console.log(this.listComment)
    })
  }
  addComent(){
    this.Comment.content=this.content
    this.EventSerivce.addCommentToEvent( this.id,this.Comment).subscribe(res=>{
     this.listComment.push(this.Comment)
    })
  }
delete(comment:any){
  let dialogRef =  this.dialog.open(ConfirmationComponent)
  dialogRef.afterClosed().subscribe(result => {
    if(result==true){
      this.EventSerivce.deleteComment(comment.id).subscribe(res=>{
        this.getComments()
      })
    }
    else console.log('nope');

  });
}
}
