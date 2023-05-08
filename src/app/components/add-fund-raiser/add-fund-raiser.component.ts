import { Component, OnInit } from '@angular/core';
import { Fundraiser } from 'app/shared/Models/fundraiser';
import { FundraiserService } from 'app/shared/Services/FundraiserService/fundraiser.service';

@Component({
  selector: 'app-add-fund-raiser',
  templateUrl: './add-fund-raiser.component.html',
  styleUrls: ['./add-fund-raiser.component.scss']
})

export class AddFundRaiserComponent implements OnInit {
  fundraiser : Fundraiser = new Fundraiser();


  constructor(private fs: FundraiserService) { }

  ngOnInit(): void {
  }
  private showSuccessMessage : boolean=false
    message: string = '';
  addFundraiser() {
    this.fs.addFundraiser(this.fundraiser).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
    );
  }

  onSubmit1() {
    this.addFundraiser();
    console.log(this.fundraiser);
  }

  showF() {
    console.log(this.fundraiser);
  }
  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.fundraiser.title);
    formData.append('goal', this.fundraiser.goal);
    formData.append('description', this.fundraiser.description);
    formData.append('deadline', this.fundraiser.deadline.toISOString());
    formData.append('target', this.fundraiser.target.toString());

    this.fs.addFundraiser(formData).subscribe(

        response => {
          console.log(response);
          this.showSuccessMessage = true;
          this.message = 'Fundraiser has been submitted successfully!';
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);

        },
        error => {
          console.log(error);
        }
    );
  }

}
