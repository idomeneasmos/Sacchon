import { TestBed } from '@angular/core/testing';

import { ListofmypatientsService } from './listofmypatients.service';

describe('ListofmypatientsService', () => {
  let service: ListofmypatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofmypatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
