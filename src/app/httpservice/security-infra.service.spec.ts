import { TestBed } from '@angular/core/testing';

import { SecurityInfraService } from './security-infra.service';

describe('SecurityInfraService', () => {
  let service: SecurityInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
