import { Comment } from "../Models/comment.model";
import { Category } from "./category/category";

export class Article {
  id: number;
  title?: string;
  description?: string;
  img?:any;
  content?: string;
  publishDate?: Date;
  lastSentDate: Date;
  likes: number;
  dislikes: number;
  comment: Comment[];
  tags: string[];
  categories?: Category[];
  categoryName?: string;

  constructor(
    title?: string,
    description?: string,
    content?: string,
    categoryName?: string // add categoryName as optional parameter

  ) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.publishDate = this.publishDate;
    this.categoryName = categoryName; // initialize categoryName property
  }
}
