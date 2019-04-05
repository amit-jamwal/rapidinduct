import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingQuizComponent } from './training-quiz.component';

describe('TrainingQuizComponent', () => {
  let component: TrainingQuizComponent;
  let fixture: ComponentFixture<TrainingQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
