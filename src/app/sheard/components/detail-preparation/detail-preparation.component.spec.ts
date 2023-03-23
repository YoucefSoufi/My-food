import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPreparationComponent } from './detail-preparation.component';

describe('DetailPreparationComponent', () => {
  let component: DetailPreparationComponent;
  let fixture: ComponentFixture<DetailPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
