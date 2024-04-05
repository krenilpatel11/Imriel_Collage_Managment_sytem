import { Component, OnInit } from '@angular/core';
import { CourseModel, collageModel } from '../../../Model/app.Models';
import { CourseHttpService } from '../../httpservice/course-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-update.component.html',
  styleUrl: './course-update.component.css'
})
export class CourseUpdateComponent implements OnInit  {
  message: string;
  course:CourseModel;
  courses:Array<CourseModel>;
  courseId: number = 0; // Variable to store the ID from the route

  constructor(private courseService: CourseHttpService, private router: Router,    private route: ActivatedRoute // Inject ActivatedRoute
  ) {
    this.course = new CourseModel(0,0,'',0,'','','');
    this.courses=new Array<CourseModel>();
    this.message = '';
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id']; // The '+' sign converts the string to a number
      if (this.courseId) {
        this.getCourseById(this.courseId);
      }
    });
    }
    getCourseById(id: number): void {
      const token = sessionStorage.getItem('token');
      if (!token) {
        this.message = 'No token found.';
        return;
      }

      this.courseService.getCousebyUniqueID(id, token).subscribe({
        next: (response) => {
          this.course = response.Record;  // Assuming the response contains a single course object
        },
        error: (error) => {
          this.message = `Error occurred: ${error}`;
        }
      });
    }
  updateCourse(id: number): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      return;
    }

    this.courseService.putCourseData(this.courseId, this.course, token).subscribe({
      next: (response) => {
        this.message = response.Message;
        this.courses = response.Records;
        console.log(this.message);

      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
      }
    });
    this.router.navigate(['/course/get']);

  }
  clearCourse(){
    this.course = new CourseModel(0,0,'',0,'','','');
  }

}
