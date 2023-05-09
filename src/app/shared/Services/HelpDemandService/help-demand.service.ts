import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpDemand } from 'app/shared/Models/HelpDemand';
import { User } from 'app/shared/Models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class HelpDemandService {
  readonly API_URL = 'http://localhost:8081/help_demands'

  constructor(private httpClient : HttpClient) { }

  getAllHelpDemands(){
    return this.httpClient.get(`${this.API_URL}`)
  }
  getAllHelpDemandsWaiting(){
    return this.httpClient.get(`${this.API_URL + "/wait"}`)
  }
  getNotRespondedToNumber(){
    return this.httpClient.get(`${this.API_URL + "/notRespondedTo"}`)
  }
  getAllHelpDemandsOrderedByDateFromNewest(){
    return this.httpClient.get(this.API_URL+"/orderd/down")
  }
  getAllHelpDemandsOrderdByDateFromOldest(){
    return this.httpClient.get(this.API_URL+"/orderd")
  }
  getHelpDemand(id: number) {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.get(url, httpOptions)
  }
  getSender(id: number): Observable<User> {
    const url = `${this.API_URL+"/sender"}/${id}`
    return this.httpClient.get<User>(url, httpOptions)
  }
  
  addHelpDemand(id:number, helpDemand: HelpDemand) {
    const url = `${this.API_URL + "/add/"}${id}`
    return this.httpClient.post(url, helpDemand, httpOptions)
  }
  updateHelpDemand(id: number, helpDemand: HelpDemand) {
    const url = `${this.API_URL + "/update/"}${id}`
    return this.httpClient.put(url, helpDemand, httpOptions)
  }

  deleteHelpDemand(id: any) {
    const url = `${this.API_URL + "/delete/"}${id}`
    return this.httpClient.delete(url, httpOptions)
  }

  upgradeHelpDemand (id : any ){
    const url = `${this.API_URL+"/upgrading/"}${id}`;
    return this.httpClient.post(url, httpOptions);
  }
  respondTo (idUser : any,idHelpDemand : any ){
    const url = this.API_URL+"/responding/"+idUser+"/request/"+idHelpDemand;
    return this.httpClient.post(url, httpOptions);
  }

  
}
