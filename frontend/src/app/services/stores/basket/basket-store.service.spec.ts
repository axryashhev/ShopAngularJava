import { TestBed } from '@angular/core/testing';

import { BasketStoreService } from './basket-store.service';

describe('BasketStoreService', () => {
  let service: BasketStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
