import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReportParentComponent } from './student-report-parent.component';

describe('StudentReportParentComponent', () => {
  let component: StudentReportParentComponent;
  let fixture: ComponentFixture<StudentReportParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentReportParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentReportParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
