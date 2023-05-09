import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundDonationComponent } from './add-fund-donation.component';

describe('AddFundDonationComponent', () => {
  let component: AddFundDonationComponent;
  let fixture: ComponentFixture<AddFundDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFundDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFundDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
