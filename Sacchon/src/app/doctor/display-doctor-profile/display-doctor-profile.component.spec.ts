import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDoctorProfileComponent } from './display-doctor-profile.component';

describe('DisplayDoctorProfileComponent', () => {
  let component: DisplayDoctorProfileComponent;
  let fixture: ComponentFixture<DisplayDoctorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDoctorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
