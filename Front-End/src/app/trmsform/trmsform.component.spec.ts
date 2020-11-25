import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRMSFormComponent } from './trmsform.component';

describe('TRMSFormComponent', () => {
  let component: TRMSFormComponent;
  let fixture: ComponentFixture<TRMSFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRMSFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TRMSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
