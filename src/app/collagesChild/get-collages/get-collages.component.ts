import { Component, OnInit } from '@angular/core';
import { CollageHttpService } from '../../httpservice/collage-http.service';
import { collageModel } from './../../../Model/app.Models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-get-collages',
  standalone: true,
  imports:[NgFor],
  templateUrl: './get-collages.component.html',
  styleUrls: ['./get-collages.component.css']
})
export class GetCollagesComponent implements OnInit {
  collages: collageModel[] = [];
  message: string = '';
  collageNameToGet: string = '';
  todelete: any;

  constructor(private collageService: CollageHttpService) {
    //this.collage = new collageModel(0, 0, '', '', '');
    //this.collages = [];
    // this.message = '';
    // this.collageNameToGet = '';
    this.todelete = null;
  }

  ngOnInit(): void {
    this.getCollageDetails();
  }

  getCollageDetails(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      console.error(this.message);
      return;
    }

    this.collageService.getCollageData(token).subscribe({
      next: (response) => {
        // Convert list-like object to an array
        const recordsArray: collageModel[] = Array.from(Object.keys(response.Records), key => response.Records[key]);

        this.collages = recordsArray.map((item: collageModel) => ({
          collageUniqueId: item.collageUniqueId,
          CollegeId: item.CollegeId,
          Name: item.Name,
          Location: item.Location,
          Description: item.Description
        }));
        this.message = response.Message;
        console.log(this.collages);
      },
      error: (error) => {
        if (error.status === 404) {
          this.message = 'The requested resource was not found.';
        } else {
          this.message = `An error occurred: ${error.message}`;
        }
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

  deleteCollageById(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      console.error(this.message);
      return;
    }

    this.collageService.deleteCollageData(this.todelete, token).subscribe({
      next: (response) => {
        this.collages = response.Records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
        console.error(this.message);
      }
    });
  }
}
