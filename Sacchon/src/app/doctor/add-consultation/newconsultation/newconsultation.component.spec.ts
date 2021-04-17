import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconsultationComponent } from './newconsultation.component';

describe('NewconsultationComponent', () => {
  let component: NewconsultationComponent;
  let fixture: ComponentFixture<NewconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
