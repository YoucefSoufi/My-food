import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettePlanificationResumeComponent } from './recette-planification-resume.component';

describe('RecettePlanificationResumeComponent', () => {
  let component: RecettePlanificationResumeComponent;
  let fixture: ComponentFixture<RecettePlanificationResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettePlanificationResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettePlanificationResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
