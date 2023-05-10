import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/shared/Models/article.model';
import { Category } from 'app/shared/Models/category/category';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';
import { CategoryService } from 'app/shared/Services/Category/category.service';
import { Location } from '@angular/common';


@Component({
  selector: 'allarticles',
  templateUrl: './allarticles.component.html',
  styleUrls: ['./allarticles.component.scss']
})
export class AllarticlesComponent implements OnInit {

    article : Article;
    currentPage = 1;
    pageSize = 6;
    totalPages = 0;
    pagedArticles: Article[] = [];
    articles: Article[] = [];
    mostLikedArticle: any;
    mostCommentedArticle: any;

    articleId: number;
  
    categories: Category[] = [];
    mostArticleCategory: {categoryName: string, articleCount: number};


    currentUrl: string;

    constructor(private route: ActivatedRoute,public articleService: ArticleService ,
      private location: Location, public categoryService : CategoryService,

     ) {
  
  
     }
  
   ngOnInit(): void {
  this.articleService.getArticlesList().subscribe((articles: Article[]) => {
    this.articles = articles;
    this.totalPages = Math.ceil(this.articles.length / this.pageSize);
    this.setCurrentPage(1);
  });
  this.currentUrl = 'https://www.change.org/p/mclaudebibeau-stop-au-gaspillage-alimentaire-au-canada?source_location=discover_feed';

  this.articleService.getMostLikedArticle().subscribe((data) => {
    this.mostLikedArticle = data;
  });

  this.articleService.getArticleWithMostComments().subscribe((data) => {
    this.mostCommentedArticle = data;
  });
  
  this.articleService.getCategoryWithMostArticles().subscribe((data) => {
    this.mostArticleCategory = data;
  });

  this.categoryService.getDistinctCategories().subscribe((categories) => {
    this.categories = categories;
    console.log(categories); // log categories to see if the tags are present
});



  this.route.params.subscribe(params => {
    this.articleId = +params['id'];
    this.articleService.getArticle(this.articleId).subscribe(data => {
      this.article = data;
    });
  });
}
setCurrentPage(page: number) {
  if (page < 1 || page > this.totalPages) {
    return;
  }

  
  this.currentPage = page;
  const startIndex = (page - 1) * this.pageSize;
  const endIndex = Math.min(startIndex + this.pageSize, this.articles.length);
  this.pagedArticles = this.articles.slice(startIndex, endIndex);
  window.scrollTo(0, 0);
}


generateShareLink(event: Event): void {
  event.preventDefault();
  const shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.currentUrl)}`;
  window.open(shareLink, '_blank');
} 

get pages(): number[] {
  const pages: number[] = [];

  for (let i = 1; i <= this.totalPages; i++) {
    pages.push(i);
  }

  return pages;
}




}