import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo2RoutingModule } from './ejemplo2-routing.module';
import { Ejemplo2Component } from './ejemplo2.component';
import { MaterialModule } from '../material.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [Ejemplo2Component, InputComponent],
  imports: [
    CommonModule,
    Ejemplo2RoutingModule,
    MaterialModule
  ]
})
export class Ejemplo2Module { }
