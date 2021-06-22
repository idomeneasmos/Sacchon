import { TestBed } from '@angular/core/testing';

import { ListofinactivedoctorsService } from './listofinactivedoctors.service';

describe('ListofinactivedoctorsService', () => {
  let service: ListofinactivedoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofinactivedoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
