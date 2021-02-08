import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo1RoutingModule } from './ejemplo1-routing.module';
import { Ejemplo1Component } from './ejemplo1.component';
import { MaterialModule } from '../material.module';
import { ImpuestosComponent } from './impuestos/impuestos.component';


@NgModule({
  declarations: [Ejemplo1Component, ImpuestosComponent],
  exports: [Ejemplo1Component],
  imports: [
    CommonModule,
    Ejemplo1RoutingModule,
    MaterialModule
  ]
})
export class Ejemplo1Module { }
