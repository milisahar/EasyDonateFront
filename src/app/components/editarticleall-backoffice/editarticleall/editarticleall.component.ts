import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/shared/Models/category/category';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';
import { CategoryService } from 'app/shared/Services/Category/category.service';

@Component({
  selector: 'app-editarticleall',
  templateUrl: './editarticleall.component.html',
  styleUrls: ['./editarticleall.component.scss']
})
export class EditarticleallComponent implements OnInit {

  id: number;
  article: any;
  articleForm: FormGroup;
  title: string = '';
  description: string = '';
  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private formBuilder: FormBuilder
  ) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('Component initialized');

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log('Got article ID:', this.id);
      this.articleService.getArticle(this.id)
        .subscribe(data => {
          console.log('Got article data:', data);
          this.article = data;
          this.articleForm.setValue({
            title: this.article.title,
            description: this.article.description,
            content: this.article.content
          });
          console.log('Article form value set:', this.articleForm.value);
        });
    });
  }
  
  onSubmit() {
    console.log('Form submitted:', this.articleForm.value);
    const formData = this.articleForm.value;
    formData.id = this.id;

    this.articleService.updateArticle(formData).subscribe(data => {
      console.log('Article updated:', data);
      this.article = data;
      alert('The article was updated.');
      this.router.navigate(['/allarticlesbackoffice']);
    });
  }
}
