import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeStackCardComponent } from './home-stack-card';

describe('HomeStackCardComponent', () => {
  let fixture: ComponentFixture<HomeStackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStackCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStackCardComponent);
    fixture.componentInstance.stack = ['Angular', 'TypeScript'];
    fixture.detectChanges();
  });

  it('renders the stack title', () => {
    expect(fixture.nativeElement.textContent).toContain('Ferramentas que eu busco primeiro.');
  });
});

