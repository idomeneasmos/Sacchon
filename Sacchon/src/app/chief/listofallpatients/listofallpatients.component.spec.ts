import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofallpatientsComponent } from './listofallpatients.component';

describe('ListofallpatientsComponent', () => {
  let component: ListofallpatientsComponent;
  let fixture: ComponentFixture<ListofallpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofallpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofallpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
