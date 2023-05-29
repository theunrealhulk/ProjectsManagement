import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsAssignmentsComponent } from './brows-assignments.component';

describe('BrowsAssignmentsComponent', () => {
  let component: BrowsAssignmentsComponent;
  let fixture: ComponentFixture<BrowsAssignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowsAssignmentsComponent]
    });
    fixture = TestBed.createComponent(BrowsAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
