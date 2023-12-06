import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchListButtonComponent } from './add-watch-list-button.component';

describe('AddWatchListButtonComponent', () => {
  let component: AddWatchListButtonComponent;
  let fixture: ComponentFixture<AddWatchListButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddWatchListButtonComponent]
    });
    fixture = TestBed.createComponent(AddWatchListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
