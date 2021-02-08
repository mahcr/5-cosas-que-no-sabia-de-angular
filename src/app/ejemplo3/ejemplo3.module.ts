import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo3Component } from './ejemplo3.component';
import { ToUsdPipe } from './to-usd.pipe';
import { MaterialModule } from '../material.module';
import { Ejemplo3RoutingModule } from './ejemplo3-routing.module';

@NgModule({
  declarations: [Ejemplo3Component, ToUsdPipe],
  imports: [
    CommonModule,
    MaterialModule,
    Ejemplo3RoutingModule
  ]
})
export class Ejemplo3Module { }
