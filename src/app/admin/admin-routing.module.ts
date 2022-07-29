import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptorListComponent } from './section A/acceptor-list.component';
import { DashboardComponent } from './All Data/dashboard.component';
import { DonorListComponent } from './Section C/donor-list.component';
import { HistoryComponent } from './Section D/history.component';
import { RequestComponent } from './Section B/request.component';
import { VerifiedDataComponent } from './Section E/verified-data.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path :'acceptorlist',component:AcceptorListComponent},
  { path :'donerlist', component:DonorListComponent},
  { path : 'verifieddata',component:VerifiedDataComponent},
  { path:'history' ,component:HistoryComponent},
  { path:'request',component:RequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
