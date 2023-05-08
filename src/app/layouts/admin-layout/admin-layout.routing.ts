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
import { AddFundRaiserComponent } from 'app/components/add-fund-raiser/add-fund-raiser.component';
import { AddFundraiserComponent } from 'app/components/add-fundraiser/add-fundraiser.component';
import {EventComponent} from "../../components/event/event.component";
import {CreateEventComponent} from "../../components/create-event/create-event.component";
import {UpdateEventComponent} from "../../components/update-event/update-event.component";
import {DetailsEventComponent} from "../../components/details-event/details-event.component";

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'home',      component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path:'donation',  component: DonationListComponent },
    { path:'fundraiser',  component: FundraiserListComponent },
    {path:'update-fundraiser/:id',component:UpdateFundraiserComponent},
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addFundRaiser',        component: AddFundRaiserComponent },
    { path: 'addFundraiser2',        component: AddFundraiserComponent },

    { path: 'CreateEvent',        component: CreateEventComponent },
    { path: 'update-Event/:id',        component: UpdateEventComponent },
    { path: 'details-Event/:id',        component: DetailsEventComponent },
    { path: 'event',        component: EventComponent },
];
