import { TestBed } from '@angular/core/testing';

import { ListoffreepatientsService } from './listoffreepatients.service';

describe('ListoffreepatientsService', () => {
  let service: ListoffreepatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListoffreepatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
