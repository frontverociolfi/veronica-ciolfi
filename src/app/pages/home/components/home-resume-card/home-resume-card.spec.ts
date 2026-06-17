import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeResumeCardComponent } from './home-resume-card';

describe('HomeResumeCardComponent', () => {
  let fixture: ComponentFixture<HomeResumeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeResumeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeResumeCardComponent);
    fixture.componentInstance.resumePdfUrl = '/cv-veronica-ciolfi.pdf';
    fixture.detectChanges();
  });

  it('renders the resume link', () => {
    expect(fixture.nativeElement.querySelector('a')).toBeTruthy();
  });
});

