import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo3Component } from './ejemplo3.component';

const routes: Routes = [{ path: '', component: Ejemplo3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejemplo3RoutingModule { }
