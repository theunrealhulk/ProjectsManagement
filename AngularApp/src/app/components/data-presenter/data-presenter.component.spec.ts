import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPresenterComponent } from './data-presenter.component';

describe('DataPresenterComponent', () => {
  let component: DataPresenterComponent;
  let fixture: ComponentFixture<DataPresenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataPresenterComponent]
    });
    fixture = TestBed.createComponent(DataPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
