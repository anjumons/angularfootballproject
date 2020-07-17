import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [DashboardComponent, NavBarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatCarouselModule,
    MDBBootstrapModule
  ],
  exports:[
    DashboardComponent,
    NavBarComponent
  ]

})
export class DashboardModule { }
