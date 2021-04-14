import { TestBed } from '@angular/core/testing';

import { SingUpPatientService } from './sing-up-patient.service';

describe('SingUpPatientService', () => {
  let service: SingUpPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingUpPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
