import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTagFiltreComponent } from './search-tag-filtre.component';

describe('SearchTagFiltreComponent', () => {
  let component: SearchTagFiltreComponent;
  let fixture: ComponentFixture<SearchTagFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTagFiltreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTagFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
