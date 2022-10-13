import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCardMovieComponent } from './horizontal-card-movie.component';

describe('HorizontalCardMovieComponent', () => {
  let component: HorizontalCardMovieComponent;
  let fixture: ComponentFixture<HorizontalCardMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCardMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalCardMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
