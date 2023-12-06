import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTrailerVideoButtonComponent } from './see-trailer-video-button.component';

describe('SeeTrailerVideoButtonComponent', () => {
  let component: SeeTrailerVideoButtonComponent;
  let fixture: ComponentFixture<SeeTrailerVideoButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeeTrailerVideoButtonComponent]
    });
    fixture = TestBed.createComponent(SeeTrailerVideoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
