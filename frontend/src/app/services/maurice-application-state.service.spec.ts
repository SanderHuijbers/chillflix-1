import { TestBed } from '@angular/core/testing';

import { MauriceApplicationStateService } from './maurice-application-state.service';

describe('MauriceApplicationStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MauriceApplicationStateService = TestBed.get(MauriceApplicationStateService);
    expect(service).toBeTruthy();
  });
});
