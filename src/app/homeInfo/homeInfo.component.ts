import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homeInfo',
  standalone: true,
  imports:[RouterLink, RouterOutlet],
  templateUrl: './homeInfo.component.html',
  styleUrls: ['./homeInfo.component.css']
})
export class HomeInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
