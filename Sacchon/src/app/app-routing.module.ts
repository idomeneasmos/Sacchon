import { ChiefComponent } from './chief/chief.component';
import { MyPatientComponent } from './doctor/my-patient/my-patient.component';
import { NewconsultationComponent } from './doctor/add-consultation/newconsultation/newconsultation.component';
import { ListofmeasurementsComponent } from './patient/listofmeasurements/listofmeasurements.component';
import { AddmeasurementComponent } from './patient/addmeasurement/addmeasurement.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpPatientComponent } from './sing-up-patient/sing-up-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SingUpDoctorComponent } from './sing-up-doctor/sing-up-doctor.component';
import { AddConsultationComponent } from './doctor/add-consultation/add-consultation.component';
import { DisplayprofileComponent } from './patient/displayprofile/displayprofile.component';

const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  { path: 'sing-up patient', component: SingUpPatientComponent  },
  { path: 'sing-up doctor', component: SingUpDoctorComponent  },
  { path: 'patient', component: PatientComponent  },
  { path: 'listofmeasurements',  component: ListofmeasurementsComponent},  
  { path: 'addmeasurement', component: AddmeasurementComponent  },
  { path: 'Home',  component: HomeComponent},
  { path: 'doctor',  component: DoctorComponent},
  { path: 'add-consultation',  component: AddConsultationComponent},
  { path: 'displayprofile', component: DisplayprofileComponent },
  { path: 'newconsultation', component: NewconsultationComponent },
  { path: 'my-patient', component: MyPatientComponent },
  { path: 'chiefDoctor', component: ChiefComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [SingUpPatientComponent, LogInComponent, PatientComponent, AddmeasurementComponent, DoctorComponent, AddConsultationComponent, NewconsultationComponent, MyPatientComponent];
