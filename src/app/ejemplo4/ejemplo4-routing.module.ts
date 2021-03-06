import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo4Component } from './ejemplo4.component';

const routes: Routes = [{ path: '', component: Ejemplo4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejemplo4RoutingModule { }
