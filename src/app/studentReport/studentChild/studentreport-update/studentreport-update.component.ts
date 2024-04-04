import { Component, NgModule } from '@angular/core';
import { StudentReportModel } from '../../../../Model/app.Models';
import { StudentReportService } from '../../../httpservice/student-report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentreport-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentreport-update.component.html',
  styleUrl: './studentreport-update.component.css'
})
export class StudentreportUpdateComponent {
  message: string;
  studentReport: StudentReportModel;
  studentReports: Array<StudentReportModel>;
  studentReportId: number = 0; // Variable to store the ID from the route

  constructor(
    private studentReportService: StudentReportService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) {
    this.studentReport = new StudentReportModel(0, 0, '', '', '');

    this.studentReports = new Array<StudentReportModel>();
    this.message = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentReportId = + params['id']; // The '+' sign converts the string to a number
      if (this.studentReportId) {
        this.getStudentReportById(this.studentReportId);
      }
    });
  }

  getStudentReportById(id: number): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.studentReportService.getStudentReportById(id, token).subscribe({
        next: (response) => {
          // Assuming the response contains the student report record
          this.studentReport = response.Record;
          // ... handle the rest of your logic
        },
        error: (error) => {
          // ... handle errors
        }
      });
    } else {
      console.error('No token found in sessionStorage.');
      // Handle the case where the token is null
    }
  }

  updateStudentReport(id: number): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      return;
    }

    this.studentReportService.updateStudentReport(this.studentReportId, this.studentReport, token).subscribe({
      next: (response) => {
        this.message = response.Message;
        this.studentReports = response.Records;
        // Navigate after the student report is updated
        this.router.navigate(['report/getReport']);
      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
      }
    });
  }

  clearStudentReport() {
    // Clear the student report form
    this.studentReport = new StudentReportModel(0, 0, '', '', '');
  }
}
