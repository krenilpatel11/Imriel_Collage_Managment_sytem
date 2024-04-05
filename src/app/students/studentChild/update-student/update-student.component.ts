import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../../../Model/app.Models';
import { StudentHttpService } from '../../../httpservice/student-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent
  implements OnInit {
    message: string;
    student: StudentModel;
    students: Array<StudentModel>;
    studentId: number = 0; // Variable to store the ID from the route

    constructor(
      private studentService: StudentHttpService,
      private router: Router,
      private route: ActivatedRoute // Inject ActivatedRoute
    ) {
      this.student = new StudentModel(0, '', '', '', '', '','',0,0,[]);

      this.students = new Array<StudentModel>();
      this.message = '';
    }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.studentId = + params['id']; // The '+' sign converts the string to a number
        if (this.studentId) {
          this.getStudentById(this.studentId);
        }
      });
    }

    getStudentById(id: number): void {
      let token = sessionStorage.getItem('token');
      if (token) {
        this.studentService.getStudentbyId(id, token).subscribe({
          next: (response) => {
            // Assuming the response contains the student record
            this.student = response.Record;
            this.message = response.Message;
            console.log(this.message);

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


    updateStudent(id: number): void {
      const token = sessionStorage.getItem('token');
      if (!token) {
        this.message = 'No token found.';
        return;
      }

      this.studentService.putStudentData(this.studentId, this.student, token).subscribe({
        next: (response) => {
          this.message = response.Message;
          this.students = response.Records;
          },
        error: (error) => {
          this.message = `Error occurred: ${error}`;
        }
      });
      this.router.navigate(['student/getStudent']);
    }

    clearStudent() {
      this.student = new StudentModel(0, '', '', '', '', '','',0,0,[]);

    }
}
