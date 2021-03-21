import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentsLoadingComponent } from './dynamic-components-loading.component';

describe('DynamicComponentsLoadingComponent', () => {
  let component: DynamicComponentsLoadingComponent;
  let fixture: ComponentFixture<DynamicComponentsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComponentsLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
