import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo1RoutingModule } from './ejemplo1-routing.module';
import { Ejemplo1Component } from './ejemplo1.component';
import { MaterialModule } from '../material.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [Ejemplo1Component, InputComponent],
  imports: [
    CommonModule,
    Ejemplo1RoutingModule,
    MaterialModule
  ]
})
export class Ejemplo1Module { }
