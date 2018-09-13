import { TestBed } from '@angular/core/testing';

import { RucService } from './ruc.service';

describe('RucService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RucService = TestBed.get(RucService);
    expect(service).toBeTruthy();
  });
});
