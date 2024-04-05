import { Component, OnInit } from '@angular/core';
import { collageModel } from '../../../Model/app.Models';
import { CollageHttpService } from '../../httpservice/collage-http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-collages',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-collages.component.html',
  styleUrl: './update-collages.component.css'
})
export class UpdateCollagesComponent implements OnInit {
  collagetoUpdate:collageModel;
  collages:Array<collageModel>;
  message: string = '';

  collageIdToUpdate:number = 0;
  collageIdToDelete:number = 0;
  todelete: any;

  constructor(private serv: CollageHttpService, private act: ActivatedRoute,private router: Router){
    this.message = '';
    this.collagetoUpdate = new collageModel(0,0,'','','');
    this.collages = new Array<collageModel>();
  }

  ngOnInit(): void {
    this.act.params.subscribe(params => {
      this.collageIdToUpdate = + params['id'];
      if(this.collageIdToUpdate){
        this.getCollageById(this.collageIdToUpdate);
      }
    })
  }
  updateCollageById(collageIdToUpdate:number):void{
    let token = sessionStorage.getItem('token');
    this.serv.putCollageData(collageIdToUpdate,this.collagetoUpdate,token).subscribe({
      next:(response) => {
        this.collagetoUpdate = response.Record;
        this.message = response.Message;
        console.log(response.Record);
        console.log(this.message);

      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
    this.router.navigate(['/collage/get']);

  }

  getCollageById(id: number): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.message = 'No token found.';
      return;
    }

    this.serv.getCollagebyUniqueId(id, token).subscribe({
      next: (response) => {
        this.collagetoUpdate = response.Record;  // Assuming the response contains a single course object
      },
      error: (error) => {
        this.message = `Error occurred: ${error}`;
      }
    });
  }


  resetCollage(){
    this.collagetoUpdate = new collageModel(0,0,'','','');
  }
}
