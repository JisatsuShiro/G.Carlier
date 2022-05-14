import { TestBed } from '@angular/core/testing';

import { ReferencesServicesService } from './references-services.service';

describe('ReferencesServicesService', () => {
  let service: ReferencesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferencesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
