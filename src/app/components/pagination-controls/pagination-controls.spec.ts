import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationControlsComponent } from './pagination-controls';

describe('PaginationControlsComponent', () => {
  let fixture: ComponentFixture<PaginationControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationControlsComponent);
    fixture.componentInstance.currentPage = 2;
    fixture.componentInstance.totalPages = 3;
    fixture.componentInstance.totalItems = 9;
    fixture.detectChanges();
  });

  it('renders the current page status', () => {
    expect(fixture.nativeElement.textContent).toContain('Pagina 2 de 3');
    expect(fixture.nativeElement.textContent).toContain('9 itens');
  });
});
