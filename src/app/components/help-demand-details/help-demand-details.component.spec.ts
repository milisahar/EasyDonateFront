import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDemandDetailsComponent } from './help-demand-details.component';

describe('HelpDemandDetailsComponent', () => {
  let component: HelpDemandDetailsComponent;
  let fixture: ComponentFixture<HelpDemandDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDemandDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDemandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
