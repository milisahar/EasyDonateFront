import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DonationListComponent } from 'app/components/donation-list/donation-list.component';
import { FundraiserListComponent } from 'app/components/fundraiserList/fundraiser-list/fundraiser-list.component';
import { UpdateFundraiserComponent } from 'app/components/updateFundraiser/update-fundraiser/update-fundraiser.component';
import { HomeComponent } from 'app/components/home/home.component';
import { AddFundraiserComponent } from 'app/components/add-fundraiser/add-fundraiser.component';
import {AddDonationsComponent} from "../../components/add-donations/add-donations.component";
import {AddFundDonationComponent} from "../../components/add-fund-donation/add-fund-donation.component";
import { AllarticlesBackofficeComponent } from 'app/components/allarticles-backoffice/allarticles-backoffice/allarticles-backoffice.component';
import { AddarticleComponent } from 'app/components/addarticle-backoffice/addarticle/addarticle.component';
import { EditarticleBackofficeComponent } from 'app/components/editarticle-backoffice/editarticle-backoffice/editarticle-backoffice.component';
import { CommentComponent } from 'app/components/comment/comment.component';
import { CommentsbackendComponent } from 'app/components/commentsbackend/commentsbackend/commentsbackend.component';
import { EditarticleallComponent } from 'app/components/editarticleall-backoffice/editarticleall/editarticleall.component';
import { UploadImageComponent } from 'app/components/upload-image/upload-image/upload-image.component';
import { CreateEventComponent } from 'app/components/create-event/create-event.component';
import { UpdateEventComponent } from 'app/components/update-event/update-event.component';
import { DetailsEventComponent } from 'app/components/details-event/details-event.component';
import { EventComponent } from 'app/components/event/event.component';


export const AdminLayoutRoutes: Routes = [
  
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'home',      component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path:'donation',  component: DonationListComponent },
    { path:'fundraiser',  component: FundraiserListComponent },
    {path:'allarticlesbackoffice',component:AllarticlesBackofficeComponent},
    {path:'addarticle',component:AddarticleComponent},
    {  path: 'AddImage/:id',component:UploadImageComponent},

    
    { path: 'commentsbyarticle/:id', component: CommentsbackendComponent },
    
    
    {  path: 'editarticleall/:id',component:EditarticleallComponent},


    {  path: 'addtags/:id',component:EditarticleBackofficeComponent},

    {path:'update-fundraiser/:id',component:UpdateFundraiserComponent},
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path:'donation',  component: DonationListComponent },
    { path:'fundraiser',  component: FundraiserListComponent },
    {path:'update-fundraiser/:id',component:UpdateFundraiserComponent},
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addFundraiser',        component: AddFundraiserComponent },
    { path: 'CreateEvent',        component: CreateEventComponent },
    { path: 'update-Event/:id',        component: UpdateEventComponent },
    { path: 'details-Event/:id',        component: DetailsEventComponent },
    { path: 'event',        component: EventComponent },

];


