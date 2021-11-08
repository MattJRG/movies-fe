import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

// FIXME: Build out tests
describe('CardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
