import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdoctoraccountComponent } from './editdoctoraccount.component';

describe('EditdoctoraccountComponent', () => {
  let component: EditdoctoraccountComponent;
  let fixture: ComponentFixture<EditdoctoraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdoctoraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdoctoraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
