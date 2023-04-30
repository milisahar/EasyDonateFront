import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FundDonation } from 'app/shared/Models/fund-donation';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import { User } from 'app/shared/Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundDonationService {
  private baseURL= 'http://localhost:8081'
  constructor( private httpClient : HttpClient) {  }
  listFundDonations() : Observable<FundDonation[]>{
    return this.httpClient.get<FundDonation[]>(`${this.baseURL}/listFundDonations`);
  }
  addFundDonation(id: number, fundDonation: FundDonation) : Observable<any>{
    return this.httpClient.post(`${this.baseURL}/addFundDonation/${id}`,fundDonation)
  }
  updateFundraiser(fundraiser:Fundraiser,id : number) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/modifyFundraiser/${id}`,fundraiser);
  }
  deleteFundraiser(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteFundraiser/${id}`);
  }
  TopThreeDonators() : Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/TopThreeUsers`);
  }
}
