import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule,
  MatDatepickerModule ,
  MatNativeDateModule,
  MatInputModule ,
  MatCheckboxModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule ,
  MatCardModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatProgressSpinnerModule ]
})
export class AngularMaterialModule { }
