import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedoctoraccountComponent } from './deletedoctoraccount.component';

describe('DeletedoctoraccountComponent', () => {
  let component: DeletedoctoraccountComponent;
  let fixture: ComponentFixture<DeletedoctoraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedoctoraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedoctoraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
