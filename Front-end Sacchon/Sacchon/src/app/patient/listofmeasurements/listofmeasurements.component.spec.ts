import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmeasurementsComponent } from './listofmeasurements.component';

describe('ListofmeasurementsComponent', () => {
  let component: ListofmeasurementsComponent;
  let fixture: ComponentFixture<ListofmeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofmeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofmeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
