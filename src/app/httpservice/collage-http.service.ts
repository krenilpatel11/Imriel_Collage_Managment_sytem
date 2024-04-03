import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, collageModel } from '../../Model/app.Models';

@Injectable({
  providedIn: 'root'
})
export class CollageHttpService {
  private url:string;

  constructor(private http: HttpClient)
  {
    this.url = 'https://localhost:7188/';
   }

   getCollageData(token:any):Observable<APIResponse<collageModel>>{
    let response : Observable<APIResponse<collageModel>>;

    response = this.http.get<APIResponse<collageModel>>(`${this.url}api/College`, {
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
   }

   getCollagebyName(name:string,token:any):Observable<APIResponse<collageModel>>{
    let response : Observable<APIResponse<collageModel>>;
    response = this.http.get<APIResponse<collageModel>>(`${this.url}api/College/${name}`,{
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  postCollageData(collage: collageModel,token:any):
  Observable<APIResponse<collageModel>>{
    let response : Observable<APIResponse<collageModel>>;
  response = this.http.post<APIResponse<collageModel>>(`${this.url}api/College`, collage, {
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    }
  });
  return response;
}

  putCollageData(id:number,collage: collageModel,token:any):
  Observable<APIResponse<collageModel>>{
    let response : Observable<APIResponse<collageModel>>;
  response = this.http.put<APIResponse<collageModel>>(`${this.url}api/College/${id}`, collage, {
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    }
  });
  return response;
}

  deleteCollageData(id:number,token:any):
  Observable<APIResponse<collageModel>>{
    let response : Observable<APIResponse<collageModel>>;
    response = this.http.delete<APIResponse<collageModel>>(`${this.url}api/College/${id}`, {
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
