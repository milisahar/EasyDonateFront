import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundRaiserComponent } from './add-fund-raiser.component';

describe('AddFundRaiserComponent', () => {
  let component: AddFundRaiserComponent;
  let fixture: ComponentFixture<AddFundRaiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFundRaiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFundRaiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
