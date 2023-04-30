import { Component, OnInit } from '@angular/core';
import { Donation } from 'app/shared/Models/donation';
import { DonationService } from 'app/shared/Services/DonsationService/donation.service';
import { Router } from 'express';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  donations: Donation[] = [];
  constructor( private donationService : DonationService) { }

  ngOnInit(): void {
    this.getDonations();
  }
  private getDonations() {
    this.donationService.getListDonations().subscribe( data => {
      this.donations = data;
    })
  }

}
