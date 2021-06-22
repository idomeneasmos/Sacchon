import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmypatientsComponent } from './listofmypatients.component';

describe('ListofmypatientsComponent', () => {
  let component: ListofmypatientsComponent;
  let fixture: ComponentFixture<ListofmypatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofmypatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofmypatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
