import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGetComponent } from './course-get.component';

describe('CourseGetComponent', () => {
  let component: CourseGetComponent;
  let fixture: ComponentFixture<CourseGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
