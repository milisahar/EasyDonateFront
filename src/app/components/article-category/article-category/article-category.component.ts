import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/shared/Models/article.model';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  articles: Article[] = [];

  constructor( private route: ActivatedRoute,
    private articleService: ArticleService) { 
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryName = params['name'];
      this.articleService.getArticlesByCategory(categoryName).subscribe(articles => {
        this.articles = articles;
      });
    });
  }

}
