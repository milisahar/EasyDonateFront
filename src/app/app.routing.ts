import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './components/home/home.component';
import {AddDonationsComponent} from "./components/add-donations/add-donations.component";
import {AddFundDonationComponent} from "./components/add-fund-donation/add-fund-donation.component";

const routes: Routes =[
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
    { path: 'addDonations',component: AddDonationsComponent },
    {path:'addFundDonation/:id',component:AddFundDonationComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
