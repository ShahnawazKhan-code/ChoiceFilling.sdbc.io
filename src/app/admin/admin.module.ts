import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './All Data/dashboard.component';
import { DonorListComponent } from './Section C/donor-list.component';
import { AcceptorListComponent } from './section A/acceptor-list.component';
import { MatTableModule} from '@angular/material/table';
import { VerifiedDataComponent } from './Section E/verified-data.component';
import { RequestComponent } from './Section B/request.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DonorListComponent,
    AcceptorListComponent,
    VerifiedDataComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,MatTableModule
  ]
})
export class AdminModule { }
