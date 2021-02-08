import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo4Module } from './ejemplo4/ejemplo4.module';

const routes: Routes = [
  {
    path: 'ejemplo-1',
    loadChildren: () =>
      import('./ejemplo1/ejemplo1.module').then((m) => m.Ejemplo1Module),
  },
  {
    path: 'ejemplo-2',
    loadChildren: () =>
      import('./ejemplo2/ejemplo2.module').then((m) => m.Ejemplo2Module),
  },
  {
    path: 'ejemplo-3',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ejemplo3/ejemplo3.module').then((m) => m.Ejemplo3Module),
      },
    ],
  },
  {
    path: 'ejemplo-4',
    loadChildren: () => Ejemplo4Module,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
