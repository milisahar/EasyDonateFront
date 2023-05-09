import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/shared/Models/category/category';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';
import { CategoryService } from 'app/shared/Services/Category/category.service';

@Component({
  selector: 'app-editarticle-backoffice',
 
  templateUrl: './editarticle-backoffice.component.html',
  styleUrls: ['./editarticle-backoffice.component.scss']
})
export class EditarticleBackofficeComponent implements OnInit {

  id: number;
  article: any;
  articleForm: FormGroup;
  title: string = '';
  description: string = '';
  content: string = '';
  selectedTags: { [key: string]: boolean } = {};
  selectedCategory = '';
  allTags: string[] = [];
  matchedCategories: Category[] = [];
  tags: string[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private formBuilder: FormBuilder
  ) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      tags: [] // <-- remove the initialization
    });
    
  }
 
  
  

  
  ngOnInit() {
    this.articleForm.get('title').disable();
    this.articleForm.get('description').disable();
    this.articleForm.get('content').disable();
    
    this.categoryService.getAllCategories()
      .subscribe(categories => {
        this.matchedCategories = categories;
        // Initialize the category form control with the first category
        if (categories.length > 0) {
          this.articleForm.patchValue({ category: categories[0] });
        }
      });
    
    this.categoryService.getTagsCategories()
      .subscribe(tags => {
        this.allTags = tags;
      });
    
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.articleService.getArticle(this.id)
        .subscribe(data => {
          this.article = data;
          const category = this.article.category ? this.article.category.id : null;
      
            const tags = this.article.tags.map(tag => tag.name);
            this.articleForm.setValue({
              title: this.article.title,
              description: this.article.description,
              content: this.article.content,
              tags: tags // <-- set the initial value of the tags control
            });
            
        });
    });
  }
  
  onSubmit() {
    const formData = this.articleForm.value;
    formData.id = this.id;
  
    // Get the selected tags
    const tags = formData.tags;
  
    this.articleService.assignRandomCategory(this.id, tags).subscribe(category => {
      if (category != null && category.name != null) { // <-- add this check
        formData.category = category;
        this.article.category = category;
        // Save the article
        this.articleService.updateArticle(formData).subscribe(data => {
          this.article = data;
          // Show a dialog with the new category
          alert(`The article was updated with category "${category.name}"`);
          this.router.navigate(['/allarticlesbackoffice']);
        });
      } else {
        console.error('The category is null or undefined.');
      }
    });
    
    
    
    
  }
  
  
  
}
