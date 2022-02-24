import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEntryComponent } from './dynamic-entry.component';

describe('DynamicEntryComponent', () => {
  let component: DynamicEntryComponent;
  let fixture: ComponentFixture<DynamicEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
