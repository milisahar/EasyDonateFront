import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'app/shared/Models/article.model';
import { Category } from 'app/shared/Models/category/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private baseUrl = 'http://localhost:8090/EasyDonate/Category';  
  constructor(private http: HttpClient) { }


  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/displaycategories`);
  }
  
  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('/api/d', category);
  }
  
  categories: Category[] = [];
  
  matchArticleToCategory(article: Article) {
    const matchedCategories: Category[] = [];
  
    for (const category of this.categories) {
      let matchedTags = 0;
      for (const tag of article.tags) {
        if (category.tags.includes(tag)) {
          matchedTags++;
        }
      }
      const score = matchedTags / category.tags.length;
      if (score > 0.5) {
        matchedCategories.push(category);
      }
    }
  
    if (matchedCategories.length > 0) {
      article.categories = matchedCategories;
    } else {
      article.categories = undefined;
    }
  }
  
  getTagsCategories() {
    return this.http.get<string[]>(`${this.baseUrl}/displaytags`);
  }
  
  
  getCategoryFromTags(tags: string[]): string {
    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i];
      let match = true;
      for (let j = 0; j < category.tags.length; j++) {
        if (!tags.includes(category.tags[j])) {
          match = false;
          break;
        }
      }
      if (match) {
        return category.name;
      }
    }
    return 'Unknown Category';
  }
  
  
  getDistinctCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  
  
}
