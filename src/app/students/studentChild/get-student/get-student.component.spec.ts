import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGetComponent } from './get-student.component';

describe('GetStudentComponent', () => {
  let component: StudentGetComponent;
  let fixture: ComponentFixture<StudentGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
