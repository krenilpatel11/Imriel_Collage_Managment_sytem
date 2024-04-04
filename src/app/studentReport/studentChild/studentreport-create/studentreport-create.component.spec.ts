import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreportCreateComponent } from './studentreport-create.component';

describe('StudentreportCreateComponent', () => {
  let component: StudentreportCreateComponent;
  let fixture: ComponentFixture<StudentreportCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentreportCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentreportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
