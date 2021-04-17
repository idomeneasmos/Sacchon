import { LogInComponent } from './log-in/log-in.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ChiefComponent } from './chief/chief.component';
import { PatientComponent } from './patient/patient.component';
import { InfodoctorComponent } from './chief/infodoctor/infodoctor.component';
import { InfopatientComponent } from './chief/infopatient/infopatient.component';
import { ListofinactivedoctorsComponent } from './chief/listofinactivedoctors/listofinactivedoctors.component';
import { ListofinactivepatientsComponent } from './chief/listofinactivepatients/listofinactivepatients.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DeleteaccountComponent } from './doctor/deleteaccount/deleteaccount.component';
import { EditaccountComponent } from './doctor/editaccount/editaccount.component';
import { ListoffreepatientsComponent } from './doctor/listoffreepatients/listoffreepatients.component';
import { ListofmypatientsComponent } from './doctor/listofmypatients/listofmypatients.component';
import { AddmeasurementComponent } from './patient/addmeasurement/addmeasurement.component';
import { DisplayprofileComponent } from './patient/displayprofile/displayprofile.component';
import { ListofmeasurementsComponent } from './patient/listofmeasurements/listofmeasurements.component';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddConsultationComponent } from './doctor/add-consultation/add-consultation.component';
import { MyPatientComponent } from './doctor/my-patient/my-patient.component';
import { ChartsModule } from 'ng2-charts';
import { NewconsultationComponent } from './doctor/add-consultation/newconsultation/newconsultation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MonthpickerComponent } from './doctor/my-patient/monthpicker/monthpicker.component';
import { NgMonthPickerModule } from 'ng-month-picker';


@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
  ChiefComponent,
  InfodoctorComponent,
  InfopatientComponent,
  ListofinactivedoctorsComponent,
  ListofinactivepatientsComponent,
  DoctorComponent,
  DeleteaccountComponent,
  EditaccountComponent,
  ListoffreepatientsComponent,
  ListofmypatientsComponent,
  AddmeasurementComponent,
  DisplayprofileComponent,
  ListofmeasurementsComponent,
  HomeComponent,
  AddConsultationComponent,
  MyPatientComponent,
  NewconsultationComponent,
  MonthpickerComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatButtonModule,
    MatIconModule,
    NgMonthPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
