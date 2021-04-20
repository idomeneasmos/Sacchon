import { PatientmeasurementsComponent } from './patient/patientmeasurements/patientmeasurements.component';
import { DeletedoctoraccountComponent } from './doctor/deletedoctoraccount/deletedoctoraccount.component';
import { EditdoctoraccountComponent } from './doctor/editdoctoraccount/editdoctoraccount.component';
import { DisplayDoctorProfileComponent } from './doctor/display-doctor-profile/display-doctor-profile.component';
import { DeleteaccountComponent } from './patient/deleteaccount/deleteaccount.component';
import { EditaccountComponent } from './patient/editaccount/editaccount.component';
import { ListofallpatientsComponent } from './chief/listofallpatients/listofallpatients.component';
import { ListofalldoctorsComponent } from './chief/listofalldoctors/listofalldoctors.component';
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
import { DoctorprofileComponent } from './chief/doctorprofile/doctorprofile.component';

const routes: Routes = [
  {path: '', redirectTo:'log-in', pathMatch:'full'},
  {path: 'log-in', component: LogInComponent},
  { path: 'sing-up patient', component: SingUpPatientComponent  },
  { path: 'sing-up doctor', component: SingUpDoctorComponent  },
  { path: 'patient', component: PatientComponent  },
  { path: 'listofmeasurements',  component: ListofmeasurementsComponent},  
  { path: 'addmeasurement', component: AddmeasurementComponent  },
  { path: 'home',  component: HomeComponent},
  { path: 'doctor',  component: DoctorComponent},
  { path: 'add-consultation',  component: AddConsultationComponent},
  { path: 'displayprofile', component: DisplayprofileComponent },
  { path: 'newconsultation', component: NewconsultationComponent },
  { path: 'my-patient', component: MyPatientComponent },
  { path: 'chiefDoctor', component: ChiefComponent },
  { path: 'doctorProfile', component: DoctorprofileComponent},
  { path: 'editAccount', component: EditaccountComponent},
  { path: 'deleteAccount', component: DeleteaccountComponent},
  { path: 'displaydoctorprofile', component: DisplayDoctorProfileComponent},
  { path: 'editdoctoraccount', component: EditdoctoraccountComponent},
  { path: 'deletedoctoraccount', component: DeletedoctoraccountComponent},
  { path: 'patientmeasurements', component: PatientmeasurementsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
