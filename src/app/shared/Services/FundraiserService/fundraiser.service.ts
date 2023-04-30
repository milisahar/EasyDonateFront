import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {
  private baseURL= 'http://localhost:8081'
  constructor( private httpClient : HttpClient) {  }
  getListFundraisers() : Observable<Fundraiser[]>{
    return this.httpClient.get<Fundraiser[]>(`${this.baseURL}/listFundraisers`);
  }
  addFundraiser(fundraiser: Fundraiser) : Observable<any>{
    return this.httpClient.post(`${this.baseURL}/addFundraiser`,fundraiser)
  }
  getFundraiserById(id: number) : Observable<Fundraiser>{
    return this.httpClient.get<Fundraiser>(`${this.baseURL}/findFundraiserById/${id}`);
  }
  listFundraisersByDate(deadline: Date) : Observable<Fundraiser>{
    return this.httpClient.get<Fundraiser>(`${this.baseURL}/listFundraisersByDate/${deadline}`);
  }
  updateFundraiser(fundraiser:Fundraiser,id : number) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/modifyFundraiser/${id}`,fundraiser);
  }
  deleteFundraiser(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteFundraiser/${id}`);
  }
  listFundraisersByArchived(archived: boolean) : Observable<Fundraiser>{
    return this.httpClient.get<Fundraiser>(`${this.baseURL}/listFundraisersByArchived/${archived}`);
  }
  bestFundraiser() : Observable<Fundraiser>{
    return this.httpClient.get<Fundraiser>(`${this.baseURL}/bestFundraiser`);
  }
  listFundraisersExipredNotSucceded() : Observable<Fundraiser>{
    return this.httpClient.get<Fundraiser>(`${this.baseURL}/listFundraisersExipredNotSucceded`);
  }
}
