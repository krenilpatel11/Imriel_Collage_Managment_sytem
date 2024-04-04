import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel, APIResponse } from '../../Model/app.Models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string; // Base API URL

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://localhost:7188/'; // Updated to match StudentReportService URL
  }

  getAllStudents(token: string): Observable<APIResponse<StudentModel[]>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<APIResponse<StudentModel[]>>(`${this.baseUrl}api/Student`, { headers });
  }

  createStudent(studentData: StudentModel, token: string): Observable<APIResponse<StudentModel>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<APIResponse<StudentModel>>(`${this.baseUrl}api/Student`, studentData, { headers });
  }

  getStudentById(studentId: number, token: string): Observable<APIResponse<StudentModel>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<APIResponse<StudentModel>>(`${this.baseUrl}api/Student/${studentId}`, { headers });
  }

  updateStudent(studentId: number, updatedData: StudentModel, token: string): Observable<APIResponse<StudentModel>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put<APIResponse<StudentModel>>(`${this.baseUrl}api/Student/${studentId}`, updatedData, { headers });
  }

  deleteStudent(studentId: number, token: string): Observable<APIResponse<void>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<APIResponse<void>>(`${this.baseUrl}api/Student/${studentId}`, { headers });
  }

  getPendingStudents(collegeId: number, token: string): Observable<APIResponse<StudentModel[]>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<APIResponse<StudentModel[]>>(`${this.baseUrl}api/Student/pending/${collegeId}`, { headers });
  }


}
