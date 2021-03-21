import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrClassStyleBindingComponent } from './attr-class-style-binding.component';

describe('AttrClassStyleBindingComponent', () => {
  let component: AttrClassStyleBindingComponent;
  let fixture: ComponentFixture<AttrClassStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrClassStyleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrClassStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
