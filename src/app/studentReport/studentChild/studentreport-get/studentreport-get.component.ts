import { Component } from '@angular/core';
import { APIResponse, StudentReportModel } from '../../../../Model/app.Models';
import { StudentReportService } from '../../../httpservice/student-report.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-studentreport-get',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './studentreport-get.component.html',
  styleUrl: './studentreport-get.component.css'
})
export class StudentreportGetComponent {
  message: string;
  studentReport: StudentReportModel;
  studentReports: Array<StudentReportModel>;
  searchTerm: string = '';
  studendEnroll : number;
  constructor(private studentReportService: StudentReportService, private router: Router) {
    this.studentReport = new StudentReportModel(0, 0, '', '', '');
    this.studentReports = new Array<StudentReportModel>();
    this.message = '';
    this.studendEnroll=1;
  }

  ngOnInit(): void {
    this.getStudentReportDetailsId();
  }

  searchStudentReports(): void {
    if (!this.searchTerm) {
      this.getStudentReportDetailsId();
    } else {
      this.studentReports = this.studentReports.filter((report: StudentReportModel) =>
        report.FullName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  getStudentReportDetailsId(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.studentReportService.getStudentReportById(this.studendEnroll,token).subscribe({
        next: (response: APIResponse<any>) => {
          this.studentReport = response.Record; // Assuming the response contains an array of student report records
          this.studentReportService.getFirstLastNameById(this.studentReport.AdmissionId, token).subscribe({
            next: (nameResponse: APIResponse<any>) => {
              this.studentReport.FullName = `${nameResponse.Record.FullName}`;
            },
            error: (nameError) => {
              this.message = `An error occurred while fetching names: ${nameError.message}`;
            }
          });
        },
        error: (error) => {
          this.message = `An error occurred: ${error.message}`;
        }
      });
    } else {
      this.message = 'No token found.';
    }
  }

  deleteStudentReport(reportIdToDelete: number): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.studentReportService.deleteStudentReport(reportIdToDelete, token).subscribe({
        next: (response) => {
          this.message = response.Message;
          this.studentReports = this.studentReports.filter(report => report.studentReportId !== reportIdToDelete);
        },
        error: (error) => {
          this.message = `Error occurred: ${error}`;
        }
      });
    } else {
      this.message = 'No token found.';
    }
  }

  navigateToUpdateReport(id: number) {
    this.router.navigate(['report/updateReport', id]);
  }

}
