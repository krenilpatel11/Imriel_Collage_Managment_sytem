import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreportUpdateComponent } from './studentreport-update.component';

describe('StudentreportUpdateComponent', () => {
  let component: StudentreportUpdateComponent;
  let fixture: ComponentFixture<StudentreportUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentreportUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentreportUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
