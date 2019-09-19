import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaChipListComponent } from './msda-chip-list.component';

describe('MsdaChipListComponent', () => {
  let component: MsdaChipListComponent;
  let fixture: ComponentFixture<MsdaChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
