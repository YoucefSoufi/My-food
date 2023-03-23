import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapePreparationComponent } from './etape-preparation.component';

describe('EtapePreparationComponent', () => {
  let component: EtapePreparationComponent;
  let fixture: ComponentFixture<EtapePreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapePreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapePreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
