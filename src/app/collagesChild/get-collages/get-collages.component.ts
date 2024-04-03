import { Component, OnInit } from '@angular/core';
import { CollageHttpService } from '../../httpservice/collage-http.service';
import { APIResponse, collageModel } from './../../../Model/app.Models';
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
    this.todelete = null;
  }

  ngOnInit(): void {
    this.getCollageDetails();
    console.log(this.collages);
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
