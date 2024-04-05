import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollageHttpService } from '../../httpservice/collage-http.service';
import { collageModel } from '../../../Model/app.Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collages-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './collages-create.component.html',
  styleUrl: './collages-create.component.css'
})
export class CollagesCreateComponent {
  message: string;
  collage:collageModel;
  collages:Array<collageModel>;
  constructor(public serv:CollageHttpService,private router: Router){
    this.message = '';
    this.collage = new collageModel(0,0,'','','');
    this.collages = new Array<collageModel>();
  }


  saveCollage(){
    let token = sessionStorage.getItem('token');
    this.serv.postCollageData(this.collage,token)
    .subscribe({
      next: (response)=>{
        console.log('Save successful:', response);
        this.collage = response.Record;
        this.message = response.Message;
        console.log(this.message);

        this.collages = [...this.collages, this.collage];
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    })

    this.router.navigate(['/collage/get']);
  }
  clearCollage(){
    this.collage = new collageModel(0,0,'','','');
  }

}

