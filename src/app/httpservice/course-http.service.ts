import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, CourseModel } from '../../Model/app.Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {

  private url: string;
  constructor(private http: HttpClient)
  {
    this.url = 'https://localhost:7188/';
   }

   getCourseData(token:any):Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;

    response = this.http.get<APIResponse<CourseModel>>(`${this.url}api/Course`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
   }

   getCousebyName(name:string,token:any):Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;
    response = this.http.get<APIResponse<CourseModel>>(`${this.url}api/Course/${name}`,{
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }
   getCousebyUniqueID(id:number,token:any):Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;
    response = this.http.get<APIResponse<CourseModel>>(`${this.url}api/Course/ById${id}`,{
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }
   getCousebyCollgeID(id:number,token:any):Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;
    response = this.http.get<APIResponse<CourseModel>>(`${this.url}api/Course/college/${id}`,{
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  postCourseData(course: CourseModel,token:any):
  Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;
  response = this.http.post<APIResponse<CourseModel>>(`${this.url}api/Course`, course, {
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    }
  });
  return response;
}

  putCourseData(id:number,course: CourseModel,token:any):
  Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;
  response = this.http.put<APIResponse<CourseModel>>(`${this.url}api/Course/${id}`, course, {
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    }
  });
  return response;
}

  deleteCourseData(id:number,token:any):
  Observable<APIResponse<CourseModel>>{
    let response : Observable<APIResponse<CourseModel>>;
    response = this.http.delete<APIResponse<CourseModel>>(`${this.url}api/Course/${id}`, {
      headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response;
  }

}
