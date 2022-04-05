import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesurementTableComponent } from './mesurement-table.component';

describe('MesurementTableComponent', () => {
  let component: MesurementTableComponent;
  let fixture: ComponentFixture<MesurementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesurementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesurementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
