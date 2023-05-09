import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommentmodalComponent } from './updatecommentmodal.component';

describe('UpdatecommentmodalComponent', () => {
  let component: UpdatecommentmodalComponent;
  let fixture: ComponentFixture<UpdatecommentmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecommentmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecommentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
