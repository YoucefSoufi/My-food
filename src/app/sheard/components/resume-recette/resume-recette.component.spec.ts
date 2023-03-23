import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRecetteComponent } from './resume-recette.component';

describe('ResumeRecetteComponent', () => {
  let component: ResumeRecetteComponent;
  let fixture: ComponentFixture<ResumeRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
