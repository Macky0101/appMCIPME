import { TestBed } from '@angular/core/testing';

import { ListUniteInsdustService } from './list-unite-insdust.service';

describe('ListUniteInsdustService', () => {
  let service: ListUniteInsdustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUniteInsdustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
