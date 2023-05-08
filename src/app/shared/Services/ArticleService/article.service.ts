import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as FileSaver from 'file-saver';
import { Article } from 'app/shared/Models/article.model';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
 private baseUrl = 'http://localhost:8081/EasyDonate/ControllerArticle';
  private generatePdfUrl = 'http://localhost:8081/ControllerArticle/generate-pdf/';

 generatePDF(id: number) {
  return this.http.get(`http://localhost:8081/EasyDonate/ControllerArticle/generate-pdf/${id}`, {
    responseType: 'arraybuffer',
    observe: 'response'
  }).pipe(
    map((response: any) => {
      const blob = new Blob([response.body], { type: 'application/pdf' });
      const article = response.headers.get('article');
const fileName = 'article' + '.pdf';
      FileSaver.saveAs(blob, fileName);
    })
  );
}
assignRandomCategory(id: number, tagNames: string[]): Observable<any> {
  const url = `${this.baseUrl}/${id}/assign-random-category`;
  return this.http.post(url, tagNames);
}

getMostLikedArticle(): Observable<any> {
  return this.http.get(`${this.baseUrl}/article/mostLikedArticle`);
}


  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/displayArticle/${id}`);
  }
  getArticleWithMostComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles/most-comments`);
  }
  
  getArticlesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/displayArticles`);
  }

  createArticle(article: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addArticle`, article);
  }

  updateArticle(article: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateArticle`, article);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteArticle/${id}`, { responseType: 'text' });
  }

  uploadImage(id : number , img : any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/addImage/${id}`,img);
  }

  getCategoryWithMostArticles(): Observable<{categoryName: string, articleCount: number}> {
    return this.http.get<{categoryName: string, articleCount: number}>(`${this.baseUrl}/category/most-articles`);
  }
  

  //generatePDF(id: number): Observable<any> {
  //  return this.http.get(`${this.baseUrl}/generate-pdf/${id}`, { responseType: 'blob' });
  //}

  likeArticle(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/like`, null);
  }

  dislikeArticle(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/dislike`, null);
  }

  getAllCommentsForArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/article/${id}/comments`);
  }

  

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/tags`);
  }
  
  getCategoryName(id: number): Observable<string> {
    const url = `${this.baseUrl}/getCategoryName/${id}`;
    return this.http.get<string>(url);
  }

  getRelatedArticles(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/relatedArticles/${id}`).pipe(
      map((data: any) => {
        return data.map((article: any) => {
          const commonTags = article.commonTags;
          const tags = article.article.tags;
          const title = article.title;
          const description = article.description;
          const id = article.id;

          return { article, commonTags, tags , title , description , id};
        });
      })
    );
  }

  getArticlesByCategory(categoryName: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articlesbycategory/${categoryName}`);
  }
  
}
