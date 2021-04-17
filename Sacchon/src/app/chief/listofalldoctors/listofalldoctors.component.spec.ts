import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofalldoctorsComponent } from './listofalldoctors.component';

describe('ListofalldoctorsComponent', () => {
  let component: ListofalldoctorsComponent;
  let fixture: ComponentFixture<ListofalldoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofalldoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofalldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
