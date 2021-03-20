import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationChild1Component } from './view-encapsulation-child1.component';

describe('ViewEncapsulationChild1Component', () => {
  let component: ViewEncapsulationChild1Component;
  let fixture: ComponentFixture<ViewEncapsulationChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
