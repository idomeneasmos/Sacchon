import { TestBed } from '@angular/core/testing';

import { ListofallldoctorsService } from './listofallldoctors.service';

describe('ListofallldoctorsService', () => {
  let service: ListofallldoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofallldoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
