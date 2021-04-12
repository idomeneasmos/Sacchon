import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffreepatientsComponent } from './listoffreepatients.component';

describe('ListoffreepatientsComponent', () => {
  let component: ListoffreepatientsComponent;
  let fixture: ComponentFixture<ListoffreepatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoffreepatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffreepatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
