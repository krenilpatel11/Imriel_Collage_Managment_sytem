import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  getRole(): string | null {
    return sessionStorage.getItem('role');
  }
  isAuthenticated(): boolean {
    return this.getRole() !== null;
  }
}
