import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainDisplayComponent } from './brain-display.component';

describe('BrainDisplayComponent', () => {
  let component: BrainDisplayComponent;
  let fixture: ComponentFixture<BrainDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
