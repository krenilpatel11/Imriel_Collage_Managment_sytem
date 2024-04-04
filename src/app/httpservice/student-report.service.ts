import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, StudentReportModel } from '../../Model/app.Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentReportService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7188/';
  }

  getStudentReportById(id: number, token: any): Observable<APIResponse<StudentReportModel>> {

    let response: Observable<APIResponse<StudentReportModel>>;

    response = this.http.get<APIResponse<StudentReportModel>>(`${this.url}api/StudentReport/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });


    return response;
  }
  createStudentReport(reportData: StudentReportModel, token: any): Observable<APIResponse<StudentReportModel>> {
    let response: Observable<APIResponse<StudentReportModel>>;
    response = this.http.post<APIResponse<StudentReportModel>>(`${this.url}api/StudentReport`, reportData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
  deleteStudentReport(id: number, token: any): Observable<APIResponse<StudentReportModel>> {
    let response: Observable<APIResponse<StudentReportModel>>;
    response = this.http.delete<APIResponse<StudentReportModel>>(`${this.url}api/StudentReport/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
  updateStudentReport(id: number, reportData: StudentReportModel, token: any): Observable<APIResponse<StudentReportModel>> {
    let response: Observable<APIResponse<StudentReportModel>>;
    response = this.http.put<APIResponse<StudentReportModel>>(`${this.url}api/StudentReport/${id}`, reportData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response;
  }

  getFirstLastNameById(id: number, token: any): Observable<APIResponse<{firstName: string, lastName: string}>> {
    return this.http.get<APIResponse<{firstName: string, lastName: string}>>(`${this.url}api/StudentReport/getFirstLastNameById/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}
