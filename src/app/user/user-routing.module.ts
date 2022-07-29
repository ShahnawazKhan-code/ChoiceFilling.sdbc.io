import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookApointmentComponent } from './book-apointment/book-apointment.component';
// import { HistoryComponent } from '../admin/history/history.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'apointment', component:BookApointmentComponent}
  // { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
