import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsProjectsComponent } from './brows-projects.component';

describe('BrowsProjectsComponent', () => {
  let component: BrowsProjectsComponent;
  let fixture: ComponentFixture<BrowsProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowsProjectsComponent]
    });
    fixture = TestBed.createComponent(BrowsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
