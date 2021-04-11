import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpDoctorComponent } from './sing-up-doctor/sing-up-doctor.component';
import { SingUpPatientComponent } from './sing-up-patient/sing-up-patient.component';
import { PatientComponent } from './patient/patient.component';
import { AddMeasurementComponent } from './patient/add-measurement/add-measurement.component';
import { EditaccountComponent } from './patient/editaccount/editaccount.component';
import { DeleteaccountComponent } from './patient/deleteaccount/deleteaccount.component';
import { DisplayprofileComponent } from './patient/displayprofile/displayprofile.component';
import { ListofmeasurementsComponent } from './patient/listofmeasurements/listofmeasurements.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ListofpatientsComponent } from './doctor/listofpatients/listofpatients.component';
import { AddconsultationComponent } from './doctor/listofpatients/patient/addconsultation/addconsultation.component';
import { ListoffreepatientsComponent } from './doctor/listoffreepatients/listoffreepatients.component';
import { AddpatientComponent } from './doctor/listoffreepatients/addpatient/addpatient.component';
import { ChiefComponent } from './chief/chief.component';
import { InfopatientComponent } from './chief/infopatient/infopatient.component';
import { InfodoctorComponent } from './chief/infodoctor/infodoctor.component';
import { ListofinactivepatientsComponent } from './chief/listofinactivepatients/listofinactivepatients.component';
import { ListofinactivedoctorsComponent } from './chief/listofinactivedoctors/listofinactivedoctors.component';
import { ListofwaitingpatientsComponent } from './chief/listofwaitingpatients/listofwaitingpatients.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SingUpDoctorComponent,
    SingUpPatientComponent,
    PatientComponent,
    AddMeasurementComponent,
    EditaccountComponent,
    DeleteaccountComponent,
    DisplayprofileComponent,
    ListofmeasurementsComponent,
    DoctorComponent,
    ListofpatientsComponent,
    AddconsultationComponent,
    ListoffreepatientsComponent,
    AddpatientComponent,
    ChiefComponent,
    InfopatientComponent,
    InfodoctorComponent,
    ListofinactivepatientsComponent,
    ListofinactivedoctorsComponent,
    ListofwaitingpatientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
