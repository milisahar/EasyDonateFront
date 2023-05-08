import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from 'app/shared/Models/comment.model';
import { Article } from 'app/shared/Models/article.model';


@Injectable({
  providedIn: 'root'
})
export class CommentService  {
  private baseUrl = 'http://localhost:8081/EasyDonate';
  comment : Comment;
  comments: Comment[];
  constructor(private http: HttpClient) { 
  
   
  }
  
  getAllArticleComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/ControllerArticleComment/displayArticleComments`);
    
  }


addArticleComment(id: number, comment: Comment): Observable<Comment> {
  const url = `${this.baseUrl}/ControllerArticleComment/addArticleComment/${id}`;
  return this.http.post<Comment>(url, comment);
}

 

updateArticleComment(id: number, comment: Comment): Observable<Comment> {
  return this.http.put<Comment>(`${this.baseUrl}/ControllerArticleComment/updateArticleComment/${id}`, comment);
}

  getArticleComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/ControllerArticleComment/displayArticleComment/${id}`);
  }

  deleteArticleComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/ControllerArticleComment/${id}`, { responseType: 'text' });
  }

  assignArticleCommentToArticle(articleCommentId: number, articleId: number): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/assign/${articleCommentId}/${articleId}`, null);
  }

  getArticleCommentsByArticle(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/ControllerArticleComment/displayArticleCommentsByArticle/${articleId}`);
  }

  addBoost(id: number): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/ControllerArticleComment/addBoost/${id}`, null);
  }
  

}
