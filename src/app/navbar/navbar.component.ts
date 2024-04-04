import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SecurityInfraService } from '../httpservice/security-infra.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  message: string;

  constructor(private serv: SecurityInfraService) {
    this.message = "";
  }

  logout(): void {
    this.serv.logoutUser();
    sessionStorage.clear();
    this.message = "You have been logged out.";
    console.log(this.message);
  }
}
