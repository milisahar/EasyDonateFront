import { Component, OnInit } from '@angular/core';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import { User } from 'app/shared/Models/user';
import { DonationService } from 'app/shared/Services/DonsationService/donation.service';
import { FundraiserService } from 'app/shared/Services/FundraiserService/fundraiser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
user : User[]
fundraiser: Fundraiser
  constructor(private donationService : DonationService , private fundraiserService:FundraiserService) { }

  ngOnInit(): void {
    this.donationService.TopThreeDonators().subscribe(res=>{
        this.user = res
    })
    this.fundraiserService.bestFundraiser().subscribe(res=>{
      this.fundraiser=res
      console.log(this.fundraiser)
    })
  }

}
