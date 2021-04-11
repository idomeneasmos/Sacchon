import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofinactivepatientsComponent } from './listofinactivepatients.component';

describe('ListofinactivepatientsComponent', () => {
  let component: ListofinactivepatientsComponent;
  let fixture: ComponentFixture<ListofinactivepatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofinactivepatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofinactivepatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
