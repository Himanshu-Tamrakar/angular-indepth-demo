import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUnderstandingComponent } from './component-understanding.component';

describe('ComponentUnderstandingComponent', () => {
  let component: ComponentUnderstandingComponent;
  let fixture: ComponentFixture<ComponentUnderstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentUnderstandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
