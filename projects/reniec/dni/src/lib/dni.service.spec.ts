import { TestBed } from '@angular/core/testing';

import { DniService } from './dni.service';

describe('DniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DniService = TestBed.get(DniService);
    expect(service).toBeTruthy();
  });
});
