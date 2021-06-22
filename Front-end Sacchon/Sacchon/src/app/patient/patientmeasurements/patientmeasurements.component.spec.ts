import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmeasurementsComponent } from './patientmeasurements.component';

describe('PatientmeasurementsComponent', () => {
  let component: PatientmeasurementsComponent;
  let fixture: ComponentFixture<PatientmeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientmeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
