import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { collageModel } from '../../Model/app.Models';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
 
}
