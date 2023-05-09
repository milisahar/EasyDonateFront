import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsbackendComponent } from './commentsbackend.component';

describe('CommentsbackendComponent', () => {
  let component: CommentsbackendComponent;
  let fixture: ComponentFixture<CommentsbackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsbackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
