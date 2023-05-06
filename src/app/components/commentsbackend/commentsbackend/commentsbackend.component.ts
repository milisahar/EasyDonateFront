import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'app/shared/Models/comment.model';
import { CommentService } from 'app/shared/Services/CommentService/comment.service';

@Component({
  selector: 'app-commentsbackend',
  templateUrl: './commentsbackend.component.html',
  styleUrls: ['./commentsbackend.component.scss']
})
export class CommentsbackendComponent implements OnInit {
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
  delete(id: number) {
    if (confirm('Are you sure you want to delete this article?')) {
      this.commentService.deleteArticleComment(id).subscribe(() => {
        this.comments = this.comments.filter((a) => a.id !== id);
      });
    }
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
