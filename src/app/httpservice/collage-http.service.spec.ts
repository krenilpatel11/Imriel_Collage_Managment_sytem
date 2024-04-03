import { TestBed } from '@angular/core/testing';

import { CollageHttpService } from './collage-http.service';

describe('CollageHttpService', () => {
  let service: CollageHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollageHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
