import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    FooterComponent
  ]
})
export class SharedModule { }
