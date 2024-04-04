import { Component } from '@angular/core';
import { StudentReportModel } from '../../../../Model/app.Models';
import { StudentReportService } from '../../../httpservice/student-report.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentreport-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentreport-create.component.html',
  styleUrl: './studentreport-create.component.css'
})
export class StudentreportCreateComponent {
  studentReport: StudentReportModel; // Initialize with default values as needed
  studentReports: StudentReportModel[];
  message: string = '';

  constructor(private studentReportService: StudentReportService, private router: Router) {
    this.studentReport = new StudentReportModel(0, 0, '', '', '');

    this.studentReports = new Array<StudentReportModel>();
  }

  saveStudentReport() {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.studentReportService.createStudentReport(this.studentReport, token)
        .subscribe({
          next: (response) => {
            console.log('Student report created:', response);
            this.studentReport = response.Record; // Assuming the response contains the student report record
            this.message = response.Message; // Assuming the response contains a message
            // Assuming you have an array of student reports to which you want to add the new report
            this.studentReports = [...this.studentReports, this.studentReport];
            this.router.navigate(['/student-report/getStudentReport']); // Navigate after the student report is created
          },
          error: (error) => {
            this.message = `Error occurred: ${error}`;
          }
        });
    } else {
      console.error('No token found in sessionStorage.');
      // Handle the case where the token is null
    }
  }

  clearStudentReport() {
    // Clear the student report form
    this.studentReport = new StudentReportModel(0, 0, '', '', '');
  }
}
