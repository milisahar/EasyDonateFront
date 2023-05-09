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
import { EventComponent } from './event/event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AddCheckPointComponent } from './add-check-point/add-check-point.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddHelpDemandComponent } from './add-help-demand/add-help-demand.component';
import { HelpDemandListComponent } from './help-demand-list/help-demand-list.component';
import { HelpDemandDetailsComponent } from './help-demand-details/help-demand-details.component';

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
        MatDatepickerModule,
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
    EventComponent,
    UpdateEventComponent,
    CreateEventComponent,
    DetailsEventComponent,
    TaskListComponent,
    TaskDetailsComponent,
    AddCheckPointComponent,
    AddTaskComponent,
    AddHelpDemandComponent,
    HelpDemandListComponent,
    HelpDemandDetailsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
