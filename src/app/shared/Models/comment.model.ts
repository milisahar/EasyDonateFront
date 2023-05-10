import { Article } from "./article.model";

export class Comment {
  id?: number;
  title?: string;
  content?: string;
  article?: Article;
  boosts?: number = 0;
  boosted?: boolean =false;

  constructor(title?: string, content?: string, article?: Article) {
    this.title = title;
    this.content = content;
    this.article = article;
    this.boosted = false; // set boosted to false by default
  }
}

