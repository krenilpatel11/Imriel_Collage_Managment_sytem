import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeInfoComponent } from './homeInfo/homeInfo.component';
import { CollagesComponent } from './collages/collages.component';
import { CollagesCreateComponent } from './collagesChild/collages-create/collages-create.component';
import { UpdateCollagesComponent } from './collagesChild/update-collages/update-collages.component';
import { GetCollagesComponent } from './collagesChild/get-collages/get-collages.component';

export const routes: Routes = [
{path:'login', component: LoginComponentComponent},
{path:'register', component: RegistrationComponentComponent},
{path:'collage',
component: CollagesComponent,
children: [
  { path: 'create', component: CollagesCreateComponent },
  { path: 'update', component: UpdateCollagesComponent },
  { path: 'get', component: GetCollagesComponent },
]

},
{path:'' , component: HomeInfoComponent}
];
