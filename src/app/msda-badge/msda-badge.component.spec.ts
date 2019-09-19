import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaBadgeComponent } from './msda-badge.component';

describe('MsdaBadgeComponent', () => {
  let component: MsdaBadgeComponent;
  let fixture: ComponentFixture<MsdaBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
