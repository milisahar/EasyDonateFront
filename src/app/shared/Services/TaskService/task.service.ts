import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'app/shared/Models/Task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly API_URL = 'http://localhost:8081/tasks'; 
  constructor(private httpClient: HttpClient) { }

 
  getAllTasks() {
    return this.httpClient.get(`${this.API_URL}`)
  }
  getTask(id: number): Observable<Task> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.get<Task>(url, httpOptions)
  }
  getAssignedTo(id: any) {
    const url = `${this.API_URL + "/getAssignedTo"}/${id}`
    return this.httpClient.get(url, httpOptions)
  }
  getInProgressNbreThis(id: any) {
    const url = `${this.API_URL + "/getAssignedTo"}/${id}`
    return this.httpClient.get(url, httpOptions)
  }
  getInProgressNbre() {
    const url = `${this.API_URL + "/progress/statisctics/INPROGRESS"}`
    return this.httpClient.get(url)
  }
  getByHelpDemand(id: any) {
    const url = `${this.API_URL + "/helpDemand"}/${id}`
    return this.httpClient.get(url, httpOptions)
  }
  addTask(task: Task) {
    return this.httpClient.post<Task>(this.API_URL + "/add", task)
  }
  addTaskByUser(id:any, task: Task) {
    return this.httpClient.post<Task>(this.API_URL + "/add/user/" + id, task)
  }
  updateTask(id: number, task: Task) {
    const url = `${this.API_URL + "/update/"}${id}`
    return this.httpClient.put<Task>(url, task, httpOptions)
  }

  deleteTask(id: any) {
    const url = `${this.API_URL + "/delete/"}${id}`
    return this.httpClient.delete(url, httpOptions)
  }

markAsDone(id: any){
  const url = `${this.API_URL + "/done/"}${id}`
    return this.httpClient.put<Task>(url, httpOptions)
}

}



/*getAllTasks2(task : any){
   return this.httpClient.get(`${this.API_URL}/tasks`, task)
 }*/
