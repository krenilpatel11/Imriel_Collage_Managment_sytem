
import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeInfoComponent } from './homeInfo/homeInfo.component';
import { CollagesComponent } from './collages/collages.component';
import { CollagesCreateComponent } from './collagesChild/collages-create/collages-create.component';
import { UpdateCollagesComponent } from './collagesChild/update-collages/update-collages.component';
import { GetCollagesComponent } from './collagesChild/get-collages/get-collages.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesCreateComponent } from './coursesChild/courses-create/courses-create.component';
import { CourseUpdateComponent } from './coursesChild/course-update/course-update.component';
import { CourseGetComponent } from './coursesChild/course-get/course-get.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './students/studentChild/create-student/create-student.component';
import { UpdateStudentComponent } from './students/studentChild/update-student/update-student.component';
import { StudentGetComponent } from './students/studentChild/get-student/get-student.component';
import { StudentReportParentComponent } from './studentReport/student-report-parent/student-report-parent.component';
import { StudentreportCreateComponent } from './studentReport/studentChild/studentreport-create/studentreport-create.component';
import { StudentreportUpdateComponent } from './studentReport/studentChild/studentreport-update/studentreport-update.component';
import { StudentreportGetComponent } from './studentReport/studentChild/studentreport-get/studentreport-get.component';
import { AuthServiceService } from './httpservice/auth-service.service';
import { AuthGuardServiceService } from './httpservice/auth-guard-service.service';


export const routes: Routes = [
{path:'login', component: LoginComponentComponent},
{path:'register', component: RegistrationComponentComponent},
{path:'collage',
component: CollagesComponent,
canActivate: [AuthGuardServiceService], data: { expectedRole: 'college' },
children: [
  { path: 'create', component: CollagesCreateComponent },
  { path: 'update/:id', component: UpdateCollagesComponent },
  { path: 'get', component: GetCollagesComponent },
]
},
{path:'course',
component: CoursesComponent,
canActivate: [AuthGuardServiceService], data: { expectedRole: 'college' },
children: [
  { path: 'create', component: CoursesCreateComponent },
  { path: 'update/:id', component: CourseUpdateComponent },
  { path: 'get', component: CourseGetComponent },
]
},
{path:'student',
component: StudentsComponent,
children: [
  { path: 'createStudent', component: CreateStudentComponent ,canActivate: [AuthGuardServiceService], data: { expectedRole: 'student' }},
  { path: 'updateStudent/:id', component: UpdateStudentComponent, canActivate: [AuthGuardServiceService], data: { expectedRole: 'student' } },
  { path: 'getStudent', component: StudentGetComponent },
  { path: 'getCourses', component: CourseGetComponent },
  { path: 'getCollage', component: GetCollagesComponent },
]
},
{path:'report',
component: StudentReportParentComponent,
children: [
  { path: 'createReport', component: StudentreportCreateComponent , canActivate: [AuthGuardServiceService], data: { expectedRole: 'college' }},
  { path: 'updateReport/:id', component: StudentreportUpdateComponent ,canActivate: [AuthGuardServiceService], data: { expectedRole: 'college' }},
  { path: 'getReport', component: StudentreportGetComponent },
  { path: 'getStudent', component: StudentGetComponent },
]
},
{path:'' , component: HomeInfoComponent}
];
