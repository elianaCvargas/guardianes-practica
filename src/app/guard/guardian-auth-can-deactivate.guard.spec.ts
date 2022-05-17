import { TestBed } from '@angular/core/testing';

import { GuardianAuthCanDeactivateGuard } from './guardian-auth-can-deactivate.guard';

describe('GuardianAuthCanDeactivateGuard', () => {
  let guard: GuardianAuthCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianAuthCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
