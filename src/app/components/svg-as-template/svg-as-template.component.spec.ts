import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAsTemplateComponent } from './svg-as-template.component';

describe('SvgAsTemplateComponent', () => {
  let component: SvgAsTemplateComponent;
  let fixture: ComponentFixture<SvgAsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
