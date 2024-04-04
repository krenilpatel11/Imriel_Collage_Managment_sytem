import { Component, OnInit } from '@angular/core';
import { CollageHttpService } from '../../httpservice/collage-http.service';
import { APIResponse, collageModel } from './../../../Model/app.Models';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseHttpService } from '../../httpservice/course-http.service';

@Component({
  selector: 'app-get-collages',
  standalone: true,
  imports:[NgFor,RouterLink,FormsModule],
  templateUrl: './get-collages.component.html',
  styleUrls: ['./get-collages.component.css']
})
export class GetCollagesComponent implements OnInit {
  collages: collageModel[] = [];
  courses: { [key: number]: string } = {};
   message: string = '';
  collageNameToGet: string = '';
  todelete: any;
  collageIdToDelete:number = 0;
  collegeUniqueIdtocrouse:number = 0;
  searchTerm: string = '';
  constructor(private collageService: CollageHttpService, private router: Router, private courseServ: CourseHttpService) {
    this.todelete = null;
  }

  ngOnInit(): void {
    this.getCollageDetails();
    this.searchCollages();
    //this.getCourseNamesFromAllCollages();
    console.log(this.collages);
  }


  searchCollages(): void {
    if (!this.searchTerm) {
      this.getCollageDetails(); // Fetch all collages if search term is empty
    } else {
      this.collages = this.collages.filter((collage: collageModel) =>
        collage.Name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  getCollageDetails(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      console.error(this.message);
      return;
    }

    this.collageService.getCollageData(token).subscribe({
      next: (value: APIResponse<collageModel>) => {

        this.collages = Object.values(value.Records);
        console.log(this.collages);
        this.collages.forEach(collage => {
          this.getCourseByCollageId(collage.collegeUniqueId);
        });
      },
      error: (error) => {
        this.message = `An error occurred: ${error.message}`;
        console.error(this.message);
      }
    });
  }

  getCollagesByName(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      console.error(this.message);
      return;
    }

    this.collageService.getCollagebyName(this.collageNameToGet, token).subscribe({
      next: (response) => {
        this.collages = [response.Record];
        this.message = response.Message;
        console.log(this.collages);
      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
        console.error(this.message);
      }
    });
  }

  getCourseByCollageId(collegeUniqueId: number): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      console.error(this.message);
      return;
    }

    this.courseServ.getCousebyCollgeID(collegeUniqueId, token).subscribe({
      next: (response: APIResponse<any>) => {
        // Store the course names in the courses object under the collage's unique ID
        this.courses[collegeUniqueId] = response.Records.map(course => course.CourseName).join(', ');

        console.log(this.courses[collegeUniqueId]);
      },
      error: (error) => {
        this.message = `Error occurred while fetching courses for collage ID ${collegeUniqueId}: ${error}`;
        console.error(this.message);
      }
    });
  }




  deleteCollage(collageIdToDelete:number):void{
    let token = sessionStorage.getItem('token');
    this.collageService.deleteCollageData(collageIdToDelete,token).subscribe({
      next:(response) => {
        this.message = response.Message;
        console.log(response.Record);
        this.getCollageDetails();
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
    this.router.navigate(['collage/get']);

  }

  navigateToUpdate(id: number): void {
    this.router.navigate(['collage/update', id]);
  }
}
