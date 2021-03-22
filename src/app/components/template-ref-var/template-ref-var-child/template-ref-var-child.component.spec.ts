import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVarChildComponent } from './template-ref-var-child.component';

describe('TemplateRefVarChildComponent', () => {
  let component: TemplateRefVarChildComponent;
  let fixture: ComponentFixture<TemplateRefVarChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefVarChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefVarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
