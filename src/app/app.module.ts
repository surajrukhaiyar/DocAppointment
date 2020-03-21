import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { MessagesComponent } from './messages/messages.component';
 
import { MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule,
  MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule, MatListModule, MatOptionModule, MatSelectModule, MatStepperModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { StatusComponent } from './user-login/status.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { GeneralComponent } from './employee-form/general/general.component';
import { EmergencyDetailComponent } from './employee-form/emergency-detail/emergency-detail.component';
import { PersonalComponent } from './employee-form/personal/personal.component';
import { EducationComponent } from './employee-form/education/education.component';
import { PreviousEmploymentComponent } from './employee-form/previous-employment/previous-employment.component';
import { SalaryComponent } from './employee-form/salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    DocProfileComponent,
    PatientFormComponent,
    UserSignUpComponent,
    MessagesComponent,
    StatusComponent,
    EmployeeFormComponent,
    GeneralComponent,
    EmergencyDetailComponent,
    PersonalComponent,
    EducationComponent,
    PreviousEmploymentComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [HttpErrorHandler,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
