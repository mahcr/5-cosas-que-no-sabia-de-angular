import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo4Component } from './ejemplo4.component';
import { PageModule } from './page/page.module';

const routes: Routes = [
  { path: '', component: Ejemplo4Component, children: [
    { path: 'session', loadChildren: () => PageModule },
    {
      path: 'details',
      loadChildren: () =>
        import('./page2/page2.module').then((m) => m.Page2Module),
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo4RoutingModule {}
