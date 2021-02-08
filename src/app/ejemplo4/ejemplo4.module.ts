import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo4Component } from './ejemplo4.component';
import { Ejemplo4RoutingModule } from './ejemplo4-routing.module';
import { MaterialModule } from '../material.module';
import { SessionService } from './page/session.service';

@NgModule({
  declarations: [Ejemplo4Component],
  imports: [
    CommonModule,
    Ejemplo4RoutingModule,
    MaterialModule
  ],
  providers: [SessionService]
})
export class Ejemplo4Module { }
