import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, StudentModel } from '../../Model/app.Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
  private url: string;
  constructor(private http: HttpClient)
  {
    this.url = 'https://localhost:7188/';
   }

   getStudentData(token:any):Observable<APIResponse<StudentModel>>{
    let response : Observable<APIResponse<StudentModel>>;

    response = this.http.get<APIResponse<StudentModel>>(`{this.url}api/Student`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
   }

   getStudentbyId(id:number,token:any):Observable<APIResponse<StudentModel>>{
    let response : Observable<APIResponse<StudentModel>>;
    response = this.http.get<APIResponse<StudentModel>>(`${this.url}api/Student/${id}`,{
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  postStudentData(student: StudentModel,token:any):
  Observable<APIResponse<StudentModel>>{
    let response : Observable<APIResponse<StudentModel>>;
  response = this.http.post<APIResponse<StudentModel>>(`${this.url}api/Student`, student, {
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    }
  });
  return response;
}

  putStudentData(id:number,student: StudentModel,token:any):
  Observable<APIResponse<StudentModel>>{
    let response : Observable<APIResponse<StudentModel>>;
  response = this.http.put<APIResponse<StudentModel>>(`${this.url}api/Student/${id}`, student, {
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    }
  });
  return response;
}

  deleteStudentData(id:number,token:any):
  Observable<APIResponse<StudentModel>>{
    let response : Observable<APIResponse<StudentModel>>;
    response = this.http.delete<APIResponse<StudentModel>>(`${this.url}api/Student/${id}`, {
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }
}
