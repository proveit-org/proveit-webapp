import { TestBed } from '@angular/core/testing';

import { ProveitService } from './proveit.service';

describe('ProveitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProveitService = TestBed.get(ProveitService);
    expect(service).toBeTruthy();
  });
});
