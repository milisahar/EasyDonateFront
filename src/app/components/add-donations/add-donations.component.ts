import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {DonationService} from "../../shared/Services/DonsationService/donation.service";
import {Donation} from "../../shared/Models/donation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-donations',
  templateUrl: './add-donations.component.html',
  styleUrls: ['./add-donations.component.scss']
})
export class AddDonationsComponent implements OnInit {
  confirm : number=0
  donation :Donation= new Donation();
  constructor(private ds: DonationService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
  pay(){
    this.confirm=1
  }
  addDonation(sum: any){
    this.donation.sum=Number(sum);
    this.ds.addDonation(this.donation).subscribe(data => {
      data=this.donation;
      console.log(data);
      console.log(sum)
      console.log(Number(sum))
    })
  }
  goHome(){
   this.route.navigate(['/dashboard'])
  }

}
