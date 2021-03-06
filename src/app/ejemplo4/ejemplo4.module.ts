import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo4RoutingModule } from './ejemplo4-routing.module';
import { Ejemplo4Component } from './ejemplo4.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [Ejemplo4Component, ErrorDialogComponent],
  imports: [
    CommonModule,
    Ejemplo4RoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class Ejemplo4Module { }
