import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferencevariableComponent } from './template-referencevariable.component';

describe('TemplateReferencevariableComponent', () => {
  let component: TemplateReferencevariableComponent;
  let fixture: ComponentFixture<TemplateReferencevariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferencevariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferencevariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
