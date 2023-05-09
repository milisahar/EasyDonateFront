import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'app/shared/Services/CommentService/comment.service';
import { Comment } from 'app/shared/Models/comment.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import 'bootstrap';
import { UpdatecommentmodalComponent } from '../updatecommentmodal/updatecommentmodal/updatecommentmodal.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  updateCommentForm: FormGroup;

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  comment: Comment;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.commentService.getArticleCommentsByArticle(articleId).subscribe(comments => {
        this.comments = comments;
        console.log(`Comments for article ${articleId} retrieved:`, comments);
        
        // Sort comments array in descending order by number of boosts
        this.comments.sort((a, b) => b.boosts - a.boosts);
  
        this.setMostBoostedComment(); // Call setMostBoostedComment() inside the callback function
      });
    });
    this.updateCommentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }
  
  
  get title() {
    return this.updateCommentForm.get('title');
  }

  get content() {
    return this.updateCommentForm.get('content');
  }

  addBoost(id: number) {
    this.commentService.addBoost(id).subscribe(
      (comment: Comment) => {
        console.log(`Boost added for comment ${id}`);
      },
      (error: any) => {
        console.log(`Error adding boost for comment ${id}: ${error}`);
      }
    );
  }

  setMostBoostedComment(): void {
    console.log('All comments:', this.comments);
    let mostBoosts = 0;
    let mostBoostedComment: Comment = this.comments[0];
    
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].boosts > mostBoosts) {
        mostBoosts = this.comments[i].boosts;
        mostBoostedComment = this.comments[i];
      }
      
    }
    
    if (mostBoostedComment) {
      mostBoostedComment.boosted = true;
      console.log('Most boosted comment:', mostBoostedComment);
    } else {
      console.log('No comments found');
    }
  }
  
}
