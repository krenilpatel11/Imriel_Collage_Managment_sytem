import { Component } from '@angular/core';
import { collageModel } from '../../../Model/app.Models';
import { CollageHttpService } from '../../httpservice/collage-http.service';

@Component({
  selector: 'app-update-collages',
  standalone: true,
  imports: [],
  templateUrl: './update-collages.component.html',
  styleUrl: './update-collages.component.css'
})
export class UpdateCollagesComponent {
  collage : collageModel;
  collages : Array<any>;
  message : string;
  todelete:any;
  collageNameToGet:any;
  collageIdToUpdate:any;

  constructor(private serv: CollageHttpService){
    this.collage = new collageModel(0,0,"","","");
    this.collages = new Array<collageModel>();
    this.message = "";
  }
  updateCollageById():void{
    let token = sessionStorage.getItem('token');
    this.serv.putCollageData(this.collageIdToUpdate,this.collage,token).subscribe({
      next:(response) => {
        this.collage = response.Record;
        this.message = response.Message;

        console.log(response.Record);
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
  }

}
