import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo2Component } from './ejemplo2.component';

const routes: Routes = [{ path: '', component: Ejemplo2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejemplo2RoutingModule { }
