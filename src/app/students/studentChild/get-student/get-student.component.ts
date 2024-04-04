import { CourseModel } from './../../../../Model/app.Models';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, StudentModel } from '../../../../Model/app.Models';
import { StudentHttpService } from '../../../httpservice/student-http.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-student-get',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class StudentGetComponent implements OnInit {
  message: string;
  student: StudentModel;
  students: Array<StudentModel>;
  studentNameToGet: string = '';
  studentIdToDelete: number = 0;
  searchTerm: string = '';
  admissionId: number = 0; // The admission ID of the student
  courseUniqueIds: number[] = []; // The list of course unique IDs to assign
  courseNames?: string[];


  constructor(private studentService: StudentHttpService, private router: Router) {
    this.student =   this.student = new StudentModel(0, '', '', '', '', '','',0,0,[]);

    this.students = new Array<StudentModel>();
    this.message = '';
  }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  searchStudents(): void {
    if (!this.searchTerm) {
      this.getStudentDetails();
    } else {
      this.students = this.students.filter((student: StudentModel) =>
        student.FirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.LastName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  getStudentDetails(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.studentService.getStudentData(token).subscribe({
        next: (response: APIResponse<any>) => {
          this.students = response.Records; // Assuming the response contains an array of student records
          console.log(this.student.AdmissionId);
          this.students.forEach(student => {
            this.getStudentCoursesById(student.AdmissionId);
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

  deleteStudent(studentIdToDelete: number): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.studentService.deleteStudentData(studentIdToDelete, token).subscribe({
        next: (response) => {
          this.message = response.Message;
          this.students = this.students.filter(student => student.AdmissionId !== studentIdToDelete);
        },
        error: (error) => {
          this.message = `Error occurred: ${error}`;
        }
      });
    } else {
      this.message = 'No token found.';
    }
  }

  navigateToUpdate(id: number) {
    this.router.navigate(['student/updateStudent', id]);
  }

  assignCourses(): void {
    const token = 'your-auth-token'; // Replace with the actual auth token
    this.studentService.assignCoursesToStudent(this.admissionId, this.courseUniqueIds, token).subscribe({
      next: (response) => {
        this.student.Courses = response.Record.Courses;
        console.log('Courses assigned successfully', this.student.Courses);
      },
      error: (error) => {
        console.error('Error assigning courses', error);
      }
    });
  }
  updateCourseIds(value: string): void {
    this.courseUniqueIds = value.split(',').map(id => parseInt(id.trim()));
  }

 getStudentCoursesById(studentId: number): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.studentService.getStudentCourses(studentId, token).subscribe({
        next: (response: APIResponse<any>) => {
          this.courseNames = response.Records; // Assuming the response contains an array of course records
          console.log('Student courses retrieved successfully', response.Records);
        },
        error: (error) => {
          this.message = `An error occurred while retrieving courses: ${error.message}`;
        }
      });
    } else {
      this.message = 'No token found.';
    }
  }
}
