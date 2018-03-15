import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinghttpComponent } from './usinghttp.component';

describe('UsinghttpComponent', () => {
  let component: UsinghttpComponent;
  let fixture: ComponentFixture<UsinghttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsinghttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinghttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
