import { TestBed } from '@angular/core/testing';
import { GridListService } from './grid-list.service';

describe('GridListService', () => {
  let service: GridListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridListService]
    });
    service = TestBed.inject(GridListService);
  });

  it('should calculate grid columns based on media breakpoint', () => {
    const mockWidths = [
      { width: 200, expectedColumns: 1 },
      { width: 500, expectedColumns: 1 },
      { width: 600, expectedColumns: 1 },
      { width: 800, expectedColumns: 2 },
      { width: 1000, expectedColumns: 3 },
      { width: 1400, expectedColumns: 3 },
      { width: 2000, expectedColumns: 3 },
    ];

    mockWidths.forEach(mock => {
      const result$ = service.calcGridColumns(mock.width);
      result$.subscribe(result => {
        expect(result).toEqual(mock.expectedColumns);
      });
    });
  });
});