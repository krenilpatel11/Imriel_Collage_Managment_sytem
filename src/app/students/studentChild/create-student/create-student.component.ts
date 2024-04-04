import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentModel } from '../../../../Model/app.Models';
import { StudentService } from '../../../httpservice/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  student: StudentModel; // Initialize with default values as needed
  students: StudentModel[];
  message: string = '';
  constructor(private studentService: StudentService, private router: Router) {
    this.student =   this.student = new StudentModel(0, '', '', '', '', '','',0,0,[]);

    this.students = new Array<StudentModel>();
  }

  saveStudent() {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.studentService.createStudent(this.student, token)
        .subscribe({
          next: (response) => {
            console.log('Student created:', response);
            this.student = response.Record; // Assuming the response contains the student record
            this.message = response.Message; // Assuming the response contains a message
            // Assuming you have an array of students to which you want to add the new student
            this.students = [...this.students, this.student];
            this.router.navigate(['/student/getStudent']); // Navigate after the student is created
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



  clearStudent() {
    // Clear the student form
    this.student =  this.student = new StudentModel(0, '', '', '', '', '','',0,0,[]);
  }
}
