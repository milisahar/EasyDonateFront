import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpDemandComponent } from './add-help-demand.component';

describe('AddHelpDemandComponent', () => {
  let component: AddHelpDemandComponent;
  let fixture: ComponentFixture<AddHelpDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelpDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHelpDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
