import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFundraiserComponent } from './update-fundraiser.component';

describe('UpdateFundraiserComponent', () => {
  let component: UpdateFundraiserComponent;
  let fixture: ComponentFixture<UpdateFundraiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFundraiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
