import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllarticlesBackofficeComponent } from './allarticles-backoffice.component';

describe('AllarticlesBackofficeComponent', () => {
  let component: AllarticlesBackofficeComponent;
  let fixture: ComponentFixture<AllarticlesBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllarticlesBackofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllarticlesBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
