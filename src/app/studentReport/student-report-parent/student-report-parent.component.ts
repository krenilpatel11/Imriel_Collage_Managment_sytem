import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-report-parent',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './student-report-parent.component.html',
  styleUrl: './student-report-parent.component.css'
})
export class StudentReportParentComponent {

}
