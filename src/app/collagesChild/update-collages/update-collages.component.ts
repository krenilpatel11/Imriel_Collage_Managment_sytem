import { Component } from '@angular/core';
import { collageModel } from '../../../Model/app.Models';
import { CollageHttpService } from '../../httpservice/collage-http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-collages',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-collages.component.html',
  styleUrl: './update-collages.component.css'
})
export class UpdateCollagesComponent {
  collagetoUpdate:collageModel;
  collages:Array<collageModel>;
  message: string = '';

  collageIdToUpdate:number = 0;
  todelete: any;

  constructor(private serv: CollageHttpService){
    this.message = '';
    this.collagetoUpdate = new collageModel(0,0,'','','');
    this.collages = new Array<collageModel>();
  }
  updateCollageById():void{
    let token = sessionStorage.getItem('token');
    this.serv.putCollageData(this.collageIdToUpdate,this.collagetoUpdate,token).subscribe({
      next:(response) => {
        this.collagetoUpdate = response.Record;
        this.message = response.Message;
        console.log(response.Record);
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
  }

}
