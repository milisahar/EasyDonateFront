import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDemandListComponent } from './help-demand-list.component';

describe('HelpDemandListComponent', () => {
  let component: HelpDemandListComponent;
  let fixture: ComponentFixture<HelpDemandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDemandListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDemandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
