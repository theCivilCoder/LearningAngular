import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEntryOtherComponent } from './dynamic-entry-other.component';

describe('DynamicEntryOtherComponent', () => {
  let component: DynamicEntryOtherComponent;
  let fixture: ComponentFixture<DynamicEntryOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicEntryOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEntryOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
