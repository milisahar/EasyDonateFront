import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/shared/Models/article.model';
import { Donation } from 'app/shared/Models/donation';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';
import { DonationService } from 'app/shared/Services/DonsationService/donation.service';
import * as Chartist from 'chartist';
import { forkJoin } from 'rxjs';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/giveaways', title: 'Giveaways', icon: 'shopping_bag-16', class: '' },
    { path: '/reception', title: 'Reception',  icon:'business_briefcase-24', class: '' },
    /* { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' }, */
];
@Component({
  selector: 'app-allarticles-backoffice',
  templateUrl: './allarticles-backoffice.component.html',
  styleUrls: ['./allarticles-backoffice.component.scss']
})
export class AllarticlesBackofficeComponent implements OnInit {

  
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    console.log("Inside ngOnInit");
    this.getArticles();
  }

  private getArticles() {
    this.articleService.getArticlesList().subscribe(data => {
      console.log("Received articles data:", data);
      this.articles = data;
      this.loadCategoryNames();
    });
  }

  private loadCategoryNames(): void {
    const categoryRequests = this.articles.map(article => {
      return this.articleService.getCategoryName(article.id);
    });

    forkJoin(categoryRequests).subscribe(categoryNames => {
      console.log("Received category names:", categoryNames);
      categoryNames.forEach((categoryName, index) => {
        this.articles[index].categoryName = categoryName as string; // Explicitly cast the response as string
      });
    });
  }

  deleteArticle(id: number) {
    if (confirm('Are you sure you want to delete this article?')) {
      this.articleService.deleteArticle(id).subscribe(() => {
        this.articles = this.articles.filter(a => a.id !== id);
      });
    }
  }

  addTags(id: number): void {
    this.router.navigate(['/addtags', id]);
  }

  editArticle(id: number): void {
    this.router.navigate(['/editarticleall', id]);
  }

  goToComments(id: number) {
    console.log("Article ID:", id);
    this.router.navigate(['/commentsbyarticle', id]);
  }

}
