import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRMSHeaderComponent } from './trmsheader.component';

describe('TRMSHeaderComponent', () => {
  let component: TRMSHeaderComponent;
  let fixture: ComponentFixture<TRMSHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRMSHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TRMSHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
