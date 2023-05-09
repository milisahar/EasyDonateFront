import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckPoint } from 'app/shared/Models/CheckPoint';
import { Observable } from 'rxjs';
const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CheckPointService {

  readonly API_URL = 'http://localhost:8081/check_points';

  constructor(private httpClient : HttpClient) { }

  getAllCheckPoints (){
    return this.httpClient.get(`${this.API_URL}`)
  }

  getCheckpoint (id : any){
    const url = `${this.API_URL}/${id}`
    return this.httpClient.get(url,httpOptions)
  }

  getCheckPointsByTaskId (taskId : any) : Observable<CheckPoint[]> {
    const url = `${this.API_URL+"/task"}/${taskId}`
    return this.httpClient.get<CheckPoint[]>(url,httpOptions)
  }

  addCheckPoint (id: number,checkPoint : CheckPoint){
    const url = `${this.API_URL+"/add/"}${id}`
    return this.httpClient.post(url, checkPoint, httpOptions)
   }
  updateCheckPoint (id: number, checkPoint : CheckPoint){
    const url = `${this.API_URL+"/update/"}${id}`
    return this.httpClient.put(url, checkPoint, httpOptions)
   }

   deleteCheckPoint(id : any){
    const url = `${this.API_URL+"/delete/"}${id}`
    return this.httpClient.delete(url, httpOptions)
   }
}
