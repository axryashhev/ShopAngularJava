import { TestBed } from '@angular/core/testing';

import { CompositeMainUserService } from './composite-main-user.service';

describe('CompositeMainUserService', () => {
  let service: CompositeMainUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompositeMainUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
