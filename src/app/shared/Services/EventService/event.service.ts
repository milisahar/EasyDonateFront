import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fundraiser} from "../../Models/fundraiser";
import {Event} from "../../Models/comment";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL= 'http://localhost:8081'
  constructor( private httpClient : HttpClient) {  }
  getListEvent() {
    return this.httpClient.get<Event[]>(`${this.baseURL}/event/listEvent`);
  }
  getEvent(id:any) {
    return this.httpClient.get<Event>(`${this.baseURL}/event/get/`+id);
  }
  addEvent(event:any){
    return this.httpClient.post(`${this.baseURL}/event/add`,event)
  }
  updateEvent(event:any,id:any ){
    return this.httpClient.post(`${this.baseURL}/event/update/`+id,event)
  }
  deleteEvent(id :any){
    return this.httpClient.delete(`${this.baseURL}/event/delete/`+id)
  }
  archivedEvent(event:any){
    return this.httpClient.post(`${this.baseURL}/event/archiver`,event)
  }
  NumberOfEvents(type :any){
    return this.httpClient.get<any>(`${this.baseURL}/event/`+type);
  }
  findByEventDate(date:any){
    return this.httpClient.get<any>(`${this.baseURL}/event/date/`+date);
  }
  findByEventPlace(place:any){
    return this.httpClient.get<any>(`${this.baseURL}/event/place/`+place);
  }

  addCommentToEvent(id :any ,comment:any){
    return this.httpClient.post(`${this.baseURL}/eventComment/add/`+id,comment)
  }

  deleteComment(id :any ){
    return this.httpClient.delete(`${this.baseURL}/eventComment/delete/`+id)
  }
}
