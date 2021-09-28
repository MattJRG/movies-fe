import { TestBed } from '@angular/core/testing';
import { MovieDialogComponent } from './movie-dialog.component';

// FIXME: Build out tests
describe('MovieDialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MovieDialogComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MovieDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
