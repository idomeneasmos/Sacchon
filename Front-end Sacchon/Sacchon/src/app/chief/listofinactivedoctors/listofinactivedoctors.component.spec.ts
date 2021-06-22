import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofinactivedoctorsComponent } from './listofinactivedoctors.component';

describe('ListofinactivedoctorsComponent', () => {
  let component: ListofinactivedoctorsComponent;
  let fixture: ComponentFixture<ListofinactivedoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofinactivedoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofinactivedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
