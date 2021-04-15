import { TestBed } from '@angular/core/testing';

import { SingUpDoctorService } from './sing-up-doctor.service';

describe('SingUpDoctorService', () => {
  let service: SingUpDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingUpDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
