import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ChiefComponent } from './chief/chief.component';
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
  ListofmeasurementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
