import { TestBed } from '@angular/core/testing';

import { DeletedoctoraccountService } from './deletedoctoraccount.service';

describe('DeletedoctoraccountService', () => {
  let service: DeletedoctoraccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletedoctoraccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
