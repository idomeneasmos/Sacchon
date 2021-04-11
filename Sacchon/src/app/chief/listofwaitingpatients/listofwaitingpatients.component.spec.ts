import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofwaitingpatientsComponent } from './listofwaitingpatients.component';

describe('ListofwaitingpatientsComponent', () => {
  let component: ListofwaitingpatientsComponent;
  let fixture: ComponentFixture<ListofwaitingpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofwaitingpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofwaitingpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
