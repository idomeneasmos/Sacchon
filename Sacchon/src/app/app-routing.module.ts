import { PatientComponent } from './patient/patient.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpPatientComponent } from './sing-up-patient/sing-up-patient.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpDoctorComponent } from './sing-up-doctor/sing-up-doctor.component';

const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  { path: 'sing-up patient', component: SingUpPatientComponent  },
  { path: 'sing-up doctor', component: SingUpDoctorComponent  },
  { path: 'patient', component: PatientComponent  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
export const routingComponents = [SingUpPatientComponent, LogInComponent, PatientComponent];
