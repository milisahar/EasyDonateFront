import { Component, OnInit } from '@angular/core';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import {FundraiserService} from "../../shared/Services/FundraiserService/fundraiser.service";

@Component({
  selector: 'app-add-fundraiser',
  templateUrl: './add-fundraiser.component.html',
  styleUrls: ['./add-fundraiser.component.scss']
})
export class AddFundraiserComponent implements OnInit {
  fundraiser : Fundraiser = new Fundraiser();

  constructor(private fs: FundraiserService) { }

  ngOnInit(): void {

  }
  addFundraiser(){
    this.fs.addFundraiser(this.fundraiser).subscribe((data) => console.log(data))
  }
  onSubmit(){
    this.addFundraiser();
    console.log(this.fundraiser)
  }
  showF(){
    console.log(this.fundraiser)
  }
}
