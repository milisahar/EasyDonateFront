import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fundraiser} from "../../Models/fundraiser";

@Injectable({
  providedIn: 'root'
})
export class CommmentService {
  private baseURL= 'http://localhost:8081'
  constructor( private httpClient : HttpClient) {  }
  getListComments(){
    return this.httpClient.get<any>(`${this.baseURL}/eventComment/List`);
  }
  addComment(event:any){
    return this.httpClient.post(`${this.baseURL}/eventComment/add`,event)
  }
  updateComment(event:any,id:any ){
    return this.httpClient.post(`${this.baseURL}/eventComment/update/`+id,event)
  }
  deleteComment(id :any){
    return this.httpClient.delete(`${this.baseURL}/eventComment/delete/`+id)
  }


}
