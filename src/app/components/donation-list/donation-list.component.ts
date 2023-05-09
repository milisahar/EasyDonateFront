import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Donation } from 'app/shared/Models/donation';
import { DonationService } from 'app/shared/Services/DonsationService/donation.service';
import { ViewportScroller } from "@angular/common";
import { FundDonationService } from 'app/shared/Services/FundDonationService/fund-donation.service';
import { FundDonation } from 'app/shared/Models/fund-donation';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  donations: Donation[] = [];
  fundDonations : FundDonation[]=[]
  showDonations :number=0


  constructor( private donationService : DonationService,private fds: FundDonationService) { }

  ngOnInit(): void {
    this.getDonations();
    this.getFundDonations();
  }

  private getDonations() {
    this.donationService.getListDonations().subscribe( data => {
      this.donations = data;
    })
  }
  private getFundDonations(){
this.fds.listFundDonations().subscribe(
  data =>{
    this.fundDonations = data;
  }
)
  }
  @ViewChild("donationBtn", {static: true, read: ElementRef}) donationBtn;
  scroll() {
   this.donationBtn.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  

}
