import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = 'http://localhost:8081/all'; 
  constructor(private httpClient: HttpClient) { }
  getAllUsers(){
    return  this.httpClient.get(`${this.API_URL}`)
  }

}
