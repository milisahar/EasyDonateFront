import { TestBed } from '@angular/core/testing';

import { CommmentService } from './commment.service';

describe('CommmentService', () => {
  let service: CommmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
