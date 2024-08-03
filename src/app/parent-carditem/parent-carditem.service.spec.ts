import { TestBed } from '@angular/core/testing';

import { ParentCarditemService } from './parent-carditem.service';

describe('ParentCarditemService', () => {
  let service: ParentCarditemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentCarditemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
