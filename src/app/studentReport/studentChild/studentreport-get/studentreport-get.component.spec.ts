import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreportGetComponent } from './studentreport-get.component';

describe('StudentreportGetComponent', () => {
  let component: StudentreportGetComponent;
  let fixture: ComponentFixture<StudentreportGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentreportGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentreportGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
