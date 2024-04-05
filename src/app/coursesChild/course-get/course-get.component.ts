import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { APIResponse, CourseModel } from '../../../Model/app.Models';
import { CourseHttpService } from '../../httpservice/course-http.service';

@Component({
  selector: 'app-course-get',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './course-get.component.html',
  styleUrl: './course-get.component.css'
})
export class CourseGetComponent implements OnInit{
  message: string;
  course:CourseModel;
  courses:Array<CourseModel>;
  courseNameToGet: string = ''; // Updated property name
  courseIdToDelete: number = 0; // Updated property name
  searchTerm: string = '';

  constructor(private courseService: CourseHttpService, private router: Router) {
    this.course = new CourseModel(0,0,'',0,'','','');
    this.courses=new Array<CourseModel>();
    this.message = '';
  }
  ngOnInit(): void {
    this.getCourseDetails();
    this.searchCourses(); // Updated method name
  }

  searchCourses(): void { // Updated method name
    if (!this.searchTerm) {
      this.getCourseDetails(); // Fetch all courses if search term is empty
    } else {
      this.courses = this.courses.filter((course: CourseModel) => // Updated to filter courses
        course.CourseName.toLowerCase().includes(this.searchTerm.toLowerCase()) // Updated property name
      );
    }
  }

  getCourseDetails(): void { // Updated method name
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      return;
    }

    this.courseService.getCourseData(token).subscribe({ // Updated service method
      next: (value: APIResponse<CourseModel>) => {
        this.courses = Object.values(value.Records); // Updated to assign to courses
      },
      error: (error) => {
        this.message = `An error occurred: ${error.message}`;
      }
    });
  }

  getCoursesByName(): void { // Updated method name
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      return;
    }

    this.courseService.getCourseData(token).subscribe({ // Updated service method
      next: (response) => {
        this.courses = [response.Record]; // Updated to assign to courses
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
      }
    });
  }

  deleteCourse(courseIdToDelete: number): void { // Updated method name
    let token = sessionStorage.getItem('token');
    this.courseService.deleteCourseData(courseIdToDelete, token).subscribe({ // Updated service method
      next: (response) => {
        this.message = response.Message;
        this.courses = response.Records; // Refresh the course list
        console.log(this.message);

      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
      }
    });
  }

  navigateToUpdate(id: number) {
    this.router.navigate(['course/update',id]); // Updated route
  }
}
