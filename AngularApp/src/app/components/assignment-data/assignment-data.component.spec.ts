import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDataComponent } from './assignment-data.component';

describe('AssignmentDataComponent', () => {
  let component: AssignmentDataComponent;
  let fixture: ComponentFixture<AssignmentDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentDataComponent]
    });
    fixture = TestBed.createComponent(AssignmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
