import { TestBed } from '@angular/core/testing';

import { DisplayDoctorProfileService } from './display-doctor-profile.service';

describe('DisplayDoctorProfileService', () => {
  let service: DisplayDoctorProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayDoctorProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
