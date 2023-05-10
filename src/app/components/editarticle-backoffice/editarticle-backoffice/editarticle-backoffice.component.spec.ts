import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticleBackofficeComponent } from './editarticle-backoffice.component';

describe('EditarticleBackofficeComponent', () => {
  let component: EditarticleBackofficeComponent;
  let fixture: ComponentFixture<EditarticleBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarticleBackofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarticleBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
