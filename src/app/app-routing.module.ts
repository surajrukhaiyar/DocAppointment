import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { StatusComponent } from './user-login/status.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/app-status',
  pathMatch: 'full'
  },
  {
    path: 'app-status',
    component: StatusComponent
  },
  {
    path: 'app-user-sign-up',
    component: UserSignUpComponent
  },
  {
    path: 'profile',
    component: DocProfileComponent
  },
  {
    path: 'patient_form',
    component: PatientFormComponent
  },
  {
    path: 'employee_form',
    component: EmployeeFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
