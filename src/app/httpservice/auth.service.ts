import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false; // Initialize this variable based on your authentication logic

  constructor(private router: Router) { }

  logout() {
    // Clear any authentication tokens or session data here
    localStorage.removeItem('token');
    this.isAuthenticated = false;

    // Optionally, you can navigate to a different route after logging out
    this.router.navigate(['/login']);
  }
}
