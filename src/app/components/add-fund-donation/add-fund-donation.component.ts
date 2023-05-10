import { Component, OnInit } from '@angular/core';
import {Donation} from "../../shared/Models/donation";
import {FundDonation} from "../../shared/Models/fund-donation";
import {NgForm} from "@angular/forms";
import {FundDonationService} from "../../shared/Services/FundDonationService/fund-donation.service";
import {FundraiserService} from "../../shared/Services/FundraiserService/fundraiser.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Fundraiser} from "../../shared/Models/fundraiser";

@Component({
  selector: 'app-add-fund-donation',
  templateUrl: './add-fund-donation.component.html',
  styleUrls: ['./add-fund-donation.component.scss']
})
export class AddFundDonationComponent implements OnInit {
  sum : number =0
  id : number=0
  confirm : number =0
  fundDonation :FundDonation= new FundDonation();
  fundraiser : Fundraiser
  constructor(private fd: FundDonationService, private fs : FundraiserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fs.getFundraiserById(params['id']).subscribe(res=>{
        this.id=res.fundraiser_id
        this.fundraiser=res
        console.log(this.fundraiser)
      })
    });
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
  addFundDonation(sum : number){
    this.fundDonation.sum = Number(sum)
    this.fd.addFundDonation(this.id,this.fundDonation).subscribe(data => {
      this.fundDonation.fundraiserRef=this.fundraiser
      console.log(data);

    })
  }
  pay(){
    this.confirm=1
  }
  goHome(){
    this.router.navigate(['/dashboard'])
  }

}
