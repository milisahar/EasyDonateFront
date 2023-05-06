import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticleallComponent } from './editarticleall.component';

describe('EditarticleallComponent', () => {
  let component: EditarticleallComponent;
  let fixture: ComponentFixture<EditarticleallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarticleallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarticleallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
