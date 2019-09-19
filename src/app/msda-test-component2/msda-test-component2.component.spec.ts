import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaTestComponent2Component } from './msda-test-component2.component';

describe('MsdaTestComponent2Component', () => {
  let component: MsdaTestComponent2Component;
  let fixture: ComponentFixture<MsdaTestComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaTestComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaTestComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
