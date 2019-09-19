import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaTestComponentComponent } from './msda-test-component.component';

describe('MsdaTestComponentComponent', () => {
  let component: MsdaTestComponentComponent;
  let fixture: ComponentFixture<MsdaTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
