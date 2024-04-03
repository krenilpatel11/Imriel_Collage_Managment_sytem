import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser, LoginUser, SecurityResponse } from '../../Model/app.security.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityInfraService {
  private url:string;
  constructor(private http:HttpClient) {
      this.url = 'https://localhost:7188/';
   }

   registerUser(user:AppUser):Observable<SecurityResponse>{
    let response:Observable<SecurityResponse>;
    response = this.http.post<SecurityResponse>(`${this.url}api/Security/register`,
    user, {
           headers: {
             'Content-Type': 'application/json'
           }
         });
    return response;
   }

  authenticateUser(user:LoginUser):Observable<SecurityResponse>{
    let response:Observable<SecurityResponse>;
    response = this.http.post<SecurityResponse>(`${this.url}api/Security/auth`,
          user, {
            headers: {
               'Content-Type': 'application/json'
            }
          });
    return response;
  }

  logoutUser():Observable<SecurityResponse>{
    let response:Observable<SecurityResponse>;
    response = this.http.post<SecurityResponse>(`${this.url}api/Security/logout`,{});
    return response;
  }

}


