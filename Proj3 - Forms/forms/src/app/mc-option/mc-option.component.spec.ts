import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McOptionComponent } from './mc-option.component';

describe('McOptionComponent', () => {
  let component: McOptionComponent;
  let fixture: ComponentFixture<McOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
