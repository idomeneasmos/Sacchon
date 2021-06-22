import { TestBed } from '@angular/core/testing';

import { ListofinactivepatientsService } from './listofinactivepatients.service';

describe('ListofinactivepatientsService', () => {
  let service: ListofinactivepatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofinactivepatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
