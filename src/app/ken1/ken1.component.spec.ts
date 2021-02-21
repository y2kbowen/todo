import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ken1Component } from './ken1.component';

describe('Ken1Component', () => {
  let component: Ken1Component;
  let fixture: ComponentFixture<Ken1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ken1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ken1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
