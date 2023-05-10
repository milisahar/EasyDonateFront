import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'app/shared/Services/ArticleService/article.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  id: any;
  fileToUpload?: File;

  constructor(private dormService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  onUpload() {
    if (!this.fileToUpload) {
      alert('No file selected please upload an image first !!');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    console.log('Uploading image...', formData); // Logging statement

    this.dormService.uploadImage(this.id, formData).subscribe(() => {
      console.log('Image upload successful'); // Logging statement
      this.reloadComponent();
    }, error => {
      console.error('Image upload failed', error); // Logging statement
    });
  }

  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    console.log('Reloading component...'); // Logging statement
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files[0];
      console.log('File selected:', this.fileToUpload.name); // Logging statement
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('Component initialized with id:', this.id); // Logging statement
  }
}
