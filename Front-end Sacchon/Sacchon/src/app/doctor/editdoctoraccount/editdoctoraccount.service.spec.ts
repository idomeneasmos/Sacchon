import { TestBed } from '@angular/core/testing';

import { EditdoctoraccountService } from './editdoctoraccount.service';

describe('EditdoctoraccountService', () => {
  let service: EditdoctoraccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditdoctoraccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
