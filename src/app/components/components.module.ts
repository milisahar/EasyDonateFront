import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { FundraiserListComponent } from './fundraiserList/fundraiser-list/fundraiser-list.component';
import { UpdateFundraiserComponent } from './updateFundraiser/update-fundraiser/update-fundraiser.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { AddFundDonationComponent } from './add-fund-donation/add-fund-donation.component';
import { AddDonationsComponent } from './add-donations/add-donations.component';
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        FormsModule

    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DonationListComponent,
    FundraiserListComponent,
    UpdateFundraiserComponent,
    HomeComponent,
    ConfirmationComponent,
    AddFundraiserComponent,
    AddFundDonationComponent,
      AddDonationsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
