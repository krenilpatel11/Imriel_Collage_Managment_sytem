import { Component } from '@angular/core';
import { CourseModel, collageModel } from '../../../Model/app.Models';
import { CourseHttpService } from '../../httpservice/course-http.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-create',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './courses-create.component.html',
  styleUrl: './courses-create.component.css'
})
export class CoursesCreateComponent {
  message: string;
  course:CourseModel;
  courses:Array<CourseModel>;

  constructor(private courseService: CourseHttpService, private router: Router) {
    this.course = new CourseModel(0,0,'',0,'','','');
    this.courses=new Array<CourseModel>();
    this.message = '';
  }

  addCourse(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      return;
    }

    this.courseService.postCourseData(this.course, token).subscribe({
      next: (response) => {
        this.course = response.Record;
        this.message = response.Message;
        this.courses = [...this.courses, this.course];
        //this.getCourses(); // Refresh the list
        this.router.navigate(['/course/get']);
      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
      }
    });
}


clearCourse(){
  this.course = new CourseModel(0,0,'',0,'','','');
}
}
