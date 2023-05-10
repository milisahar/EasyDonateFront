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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { AllarticlesComponent } from './allarticles/allarticles.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { UpdatecommentmodalComponent } from './updatecommentmodal/updatecommentmodal/updatecommentmodal.component';
import { AllarticlesBackofficeComponent } from './allarticles-backoffice/allarticles-backoffice/allarticles-backoffice.component';
import { AddarticleComponent } from './addarticle-backoffice/addarticle/addarticle.component';
import { EditarticleBackofficeComponent } from './editarticle-backoffice/editarticle-backoffice/editarticle-backoffice.component';
import { ArticleCategoryComponent } from './article-category/article-category/article-category.component';
import { CommentsbackendComponent } from './commentsbackend/commentsbackend/commentsbackend.component';
import { SuccessComponent } from './custom-notifs/success/success/success.component';
import { EditarticleallComponent } from './editarticleall-backoffice/editarticleall/editarticleall.component';
import { UploadImageComponent } from './upload-image/upload-image/upload-image.component';
import { AddFundRaiserComponent } from './add-fund-raiser/add-fund-raiser.component';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
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
      AddDonationsComponent,
    AllarticlesComponent,
    ArticleComponent,
    CommentComponent,
    UpdatecommentmodalComponent,
    AllarticlesBackofficeComponent,
    AddarticleComponent,
    EditarticleBackofficeComponent,
    ArticleCategoryComponent,
    CommentsbackendComponent,
    SuccessComponent,
    EditarticleallComponent,
    UploadImageComponent,
    EventComponent,
    UpdateEventComponent,
    CreateEventComponent,
    DetailsEventComponent,
  
 
    
   
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
