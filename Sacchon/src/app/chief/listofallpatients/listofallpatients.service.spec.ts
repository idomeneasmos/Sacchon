import { TestBed } from '@angular/core/testing';

import { ListofallpatientsService } from './listofallpatients.service';

describe('ListofallpatientsService', () => {
  let service: ListofallpatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofallpatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
