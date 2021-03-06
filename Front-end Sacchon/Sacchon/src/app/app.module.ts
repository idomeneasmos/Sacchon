import { SingUpPatientComponent } from './sing-up-patient/sing-up-patient.component';
import { SingUpDoctorComponent } from './sing-up-doctor/sing-up-doctor.component';
import { DeleteaccountComponent } from './patient/deleteaccount/deleteaccount.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChiefComponent } from './chief/chief.component';
import { PatientComponent } from './patient/patient.component';
import { ListofinactivedoctorsComponent } from './chief/listofinactivedoctors/listofinactivedoctors.component';
import { ListofinactivepatientsComponent } from './chief/listofinactivepatients/listofinactivepatients.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ListoffreepatientsComponent } from './doctor/listoffreepatients/listoffreepatients.component';
import { ListofmypatientsComponent } from './doctor/listofmypatients/listofmypatients.component';
import { AddmeasurementComponent } from './patient/addmeasurement/addmeasurement.component';
import { DisplayprofileComponent } from './patient/displayprofile/displayprofile.component';
import { ListofmeasurementsComponent } from './patient/listofmeasurements/listofmeasurements.component';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddConsultationComponent } from './doctor/add-consultation/add-consultation.component';
import { MyPatientComponent } from './doctor/my-patient/my-patient.component';
import { ChartsModule } from 'ng2-charts';
import { NewconsultationComponent } from './doctor/add-consultation/newconsultation/newconsultation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MonthpickerComponent } from './doctor/my-patient/monthpicker/monthpicker.component';
import { NgMonthPickerModule } from 'ng-month-picker';
import { ListofallpatientsComponent } from './chief/listofallpatients/listofallpatients.component';
import { ListofalldoctorsComponent } from './chief/listofalldoctors/listofalldoctors.component';
import { DoctorprofileComponent } from './chief/doctorprofile/doctorprofile.component';
import { DisplayDoctorProfileComponent } from './doctor/display-doctor-profile/display-doctor-profile.component';
import { EditaccountComponent } from './patient/editaccount/editaccount.component';
import { DeletedoctoraccountComponent } from './doctor/deletedoctoraccount/deletedoctoraccount.component';
import { EditdoctoraccountComponent } from './doctor/editdoctoraccount/editdoctoraccount.component';
import {MatTableModule} from '@angular/material/table';
import { DaterangeComponent } from './patient/daterange/daterange.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { PatientmeasurementsComponent } from './patient/patientmeasurements/patientmeasurements.component';

import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
  AppComponent,
  ChiefComponent,
  ListofinactivedoctorsComponent,
  ListofinactivepatientsComponent,
  DoctorComponent,
  ListoffreepatientsComponent,
  ListofmypatientsComponent,
  AddmeasurementComponent,
  DisplayprofileComponent,
  ListofmeasurementsComponent,
  HomeComponent,
  SingUpDoctorComponent,
  SingUpPatientComponent,
  LogInComponent, 
  PatientComponent,
  AddConsultationComponent,
  MyPatientComponent,
  NewconsultationComponent,
  MonthpickerComponent,
  ListofallpatientsComponent,
  ListofalldoctorsComponent,
  DoctorprofileComponent,
  DisplayDoctorProfileComponent,
  EditaccountComponent,
  EditdoctoraccountComponent,
  DeletedoctoraccountComponent,
  DeleteaccountComponent,
  DaterangeComponent,
  PatientmeasurementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgMonthPickerModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
