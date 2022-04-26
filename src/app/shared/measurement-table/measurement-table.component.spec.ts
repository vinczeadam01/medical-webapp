import { ComponentFixture, TestBed } from '@angular/core/testing';

import { measurementTableComponent } from './measurement-table.component';

describe('measurementTableComponent', () => {
  let component: measurementTableComponent;
  let fixture: ComponentFixture<measurementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ measurementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(measurementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
