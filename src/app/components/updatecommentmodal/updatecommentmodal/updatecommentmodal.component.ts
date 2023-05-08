import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'app/shared/Services/CommentService/comment.service';
import { Comment } from 'app/shared/Models/comment.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecommentmodal',
  templateUrl: './updatecommentmodal.component.html',
  styleUrls: ['./updatecommentmodal.component.scss']
})
export class UpdatecommentmodalComponent implements OnInit {
  comment: Comment;
  updateCommentForm: FormGroup;
  dialogRef: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {
    this.updateCommentForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('', Validators.required)
    });
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.commentService.getArticleComment(+id).subscribe(comment => {
      this.comment = comment;
      this.updateCommentForm.patchValue({
        title: this.comment.title,
        content: this.comment.content
      });
    });
  }
  

  updateComment() {
    if (this.updateCommentForm && this.comment) {
      const comment = this.updateCommentForm.value;
      const id = this.comment.id;
      this.commentService.updateArticleComment(id, comment).subscribe(() => {
        // Redirect to the updated comment's page
        this.router.navigate(['/article:id']);
      });
    }}
}
