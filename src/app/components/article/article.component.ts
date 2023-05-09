import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/shared/Models/article.model';
import { Comment } from 'app/shared/Models/comment.model';

import { CommonModule } from '@angular/common';

import { ArticleService } from 'app/shared/Services/ArticleService/article.service';
import { CommentService } from 'app/shared/Services/CommentService/comment.service';
import * as Rellax from 'rellax';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
declare var $: any;
interface status {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  
})
export class ArticleComponent implements OnInit {
  article: Article;
  @Input() article2: Article;
  @Input() id: number;
  sections: string[];
  comment: Comment = new Comment();
  successMessage: string = '';
  commentForm: FormGroup;
  relatedArticles: Article[] = [];
  currentPage: number = 0;
articlesPerPage: number = 1;



  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService,
    private formBuilder: FormBuilder,
    private router : Router
    
  )  {
    this.commentForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });}

  data: Date = new Date();
  focus;
  focus1;

  showNotification(from, align){
    const type = ['success'];

    const color = Math.floor(0);

    $.notify({
        icon: "notifications",
        message: "fundraiser updated !"

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  ngOnInit() {
    const articleId = +this.route.snapshot.paramMap.get('id');
    console.log('articleId:', articleId);
  
    this.articleService.getArticle(articleId).subscribe((article) => {
      this.article = article;
      console.log('article:', article);
      this.sections = this.article.content.split('<!-- SECTION -->');
      console.log('sections:', this.sections);
    });
  
    this.articleService.getRelatedArticles(articleId).subscribe((relatedArticles) => {
      this.relatedArticles = relatedArticles;
      console.log('relatedArticles:', relatedArticles);

    });

    

    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  like() {
    console.log(`Attempting to like article: ${this.article.id}`);
    this.articleService.likeArticle(this.article.id).subscribe((data) => {
      console.log(`Received data from likeArticle API: ${JSON.stringify(data)}`);
      if (data) {
        this.article.likes = data.likes;
        this.showNotification('top','right');
        this.router.navigate(['allarticles']);
      } else {
        console.error('Error: No data received from likeArticle API');
      }
    });
  }
  
  isCommentingAllowed(article: Article): boolean {
    const now = new Date();
    console.log("now:", now);
    const articleDate = new Date(article.publishDate);
    console.log("articleDate:", articleDate);
    const diff = now.getTime() - articleDate.getTime();
    console.log("diff:", diff);
    const diffInDays = diff / (1000 * 3600 * 24); // convert diff to days
    console.log("diffInDays:", diffInDays);
    const isAllowed = diffInDays <= 1; // allow commenting for articles posted in the last 30 days
    console.log("isAllowed:", isAllowed);
    return isAllowed;
  }
  
  
  
  
  goBack(): void {
    window.history.back();
  }
  

  dislike() {
    this.articleService.dislikeArticle(this.article.id).subscribe((data) => {
      // update dislikes count in UI
      this.article.dislikes = data.dislikes;

    });
  }
  getTotalPages(): number {
    return Math.ceil(this.relatedArticles.length / this.articlesPerPage);
  };
  
  get displayedRelatedArticles(): Article[] {
    const start = this.currentPage * this.articlesPerPage;
    const end = start + this.articlesPerPage;
    return this.relatedArticles.slice(start, end);
  }
  nextRelatedArticle() {
    if (this.currentPage < this.getTotalPages() - 1) {
      this.currentPage++;
    }
  }
  
  previousRelatedArticle() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  
  

  submitComment() {
    if (this.isCommentingAllowed(this.article)) {

    this.comment.title = this.commentForm.get('title').value;
    this.comment.content = this.commentForm.get('content').value;
    this.comment.article = this.article;
    this.commentService.addArticleComment(this.article.id, this.comment).subscribe(
      (data) => {
        // clear comment form and show success message
        this.comment = new Comment();
        this.successMessage = 'Comment added successfully';
      },
      (error) => {
        console.error(error);
      }
    );
  }}

   generatePDF() {
    const articleId = +this.route.snapshot.paramMap.get('id');
    this.articleService.generatePDF(articleId).subscribe(
    );
  }

  
  }
  

