import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopatientComponent } from './infopatient.component';

describe('InfopatientComponent', () => {
  let component: InfopatientComponent;
  let fixture: ComponentFixture<InfopatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
