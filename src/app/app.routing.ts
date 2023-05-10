import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './components/home/home.component';
import {AddDonationsComponent} from "./components/add-donations/add-donations.component";
import {AddFundDonationComponent} from "./components/add-fund-donation/add-fund-donation.component";
import { AllarticlesComponent } from './components/allarticles/allarticles.component';
import { ArticleComponent } from './components/article/article.component';
import { CommentComponent } from './components/comment/comment.component';
import { UpdatecommentmodalComponent } from './components/updatecommentmodal/updatecommentmodal/updatecommentmodal.component';
import { AllarticlesBackofficeComponent } from './components/allarticles-backoffice/allarticles-backoffice/allarticles-backoffice.component';
import { AddarticleComponent } from './components/addarticle-backoffice/addarticle/addarticle.component';
import { ArticleCategoryComponent } from './components/article-category/article-category/article-category.component';

const routes: Routes =[
  {path :'allarticles', component:AllarticlesComponent},

  {path: 'article', component:ArticleComponent},  
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'updatecomment/:id', component: UpdatecommentmodalComponent },
  { path: 'category/:name', component:ArticleCategoryComponent },

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {path: 'comment', component:CommentComponent}, 

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
      RouterModule.forRoot(routes)
  ],
  exports: [
  ],
}) 
export class AppRoutingModule { }
