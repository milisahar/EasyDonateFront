import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';
import { Article } from 'app/shared/Models/article.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent{

  article = new Article('', '', '');
  creationDate = new Date();

  constructor(private articleService: ArticleService, private route: ActivatedRoute,
    private router: Router) { }

  title: string;
  description: string;
  content: string;
  publishDate: Date;

  onSubmit(event: Event) {
    event.preventDefault();
    this.article.title = this.title;
    this.article.description = this.description;
    this.article.content = this.content;
    this.article.publishDate = this.publishDate; // Set the publish date
    this.articleService.createArticle(this.article).subscribe(data => {
      this.article = data;
      this.router.navigate(['/allarticlesbackoffice']);
    });
  }
  
}
