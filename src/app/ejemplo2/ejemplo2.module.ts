import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo2RoutingModule } from './ejemplo2-routing.module';
import { Ejemplo2Component } from './ejemplo2.component';
import { MaterialModule } from '../material.module';
import { ImpuestosComponent } from './impuestos/impuestos.component';


@NgModule({
  declarations: [Ejemplo2Component, ImpuestosComponent],
  exports: [Ejemplo2Component],
  imports: [
    CommonModule,
    Ejemplo2RoutingModule,
    MaterialModule
  ]
})
export class Ejemplo2Module { }
