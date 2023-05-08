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
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddFundRaiserComponent } from './add-fund-raiser/add-fund-raiser.component';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { AddFundDonationComponent } from './add-fund-donation/add-fund-donation.component';
=======
>>>>>>> master
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
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
<<<<<<< HEAD
import { AddFundRaiserComponent } from './add-fund-raiser/add-fund-raiser.component';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { AddFundDonationComponent } from './add-fund-donation/add-fund-donation.component';
=======
>>>>>>> Stashed changes
import { EventComponent } from './event/event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DetailsEventComponent } from './details-event/details-event.component';
<<<<<<< Updated upstream
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
=======
import { AddFundRaiserComponent } from './add-fund-raiser/add-fund-raiser.component';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { AddFundDonationComponent } from './add-fund-donation/add-fund-donation.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
>>>>>>> master

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
<<<<<<< HEAD
    MatIconModule,
    FormsModule

=======
    FormsModule
,
    MatIconModule
>>>>>>> master

  ],
  declarations: [
>>>>>>> Stashed changes
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DonationListComponent,
    FundraiserListComponent,
    UpdateFundraiserComponent,
    HomeComponent,
    ConfirmationComponent,
<<<<<<< Updated upstream
=======
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
<<<<<<< HEAD
    EditarticleallComponent,
    UploadImageComponent,
    ConfirmationComponent,
=======
  EditarticleallComponent,
    UploadImageComponent,
       ConfirmationComponent,
>>>>>>> Stashed changes
>>>>>>> master
    EventComponent,
    UpdateEventComponent,
    CreateEventComponent,
    DetailsEventComponent,
    ConfirmationComponent,
    AddFundRaiserComponent,
    AddFundraiserComponent,
    AddDonationComponent,
    AddFundDonationComponent
<<<<<<< HEAD
    
    
=======
>>>>>>> master
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
