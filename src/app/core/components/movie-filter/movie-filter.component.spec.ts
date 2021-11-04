import { TestBed } from '@angular/core/testing';
import { MovieFilterComponent } from './movie-filter.component';

// FIXME: Build out tests
describe('MovieFilterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MovieFilterComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MovieFilterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
