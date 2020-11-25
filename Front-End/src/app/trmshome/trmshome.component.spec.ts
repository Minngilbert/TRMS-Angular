import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRMSHomeComponent } from './trmshome.component';

describe('TRMSHomeComponent', () => {
  let component: TRMSHomeComponent;
  let fixture: ComponentFixture<TRMSHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRMSHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TRMSHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
