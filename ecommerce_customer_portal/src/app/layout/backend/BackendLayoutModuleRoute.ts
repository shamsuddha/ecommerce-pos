import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutModule } from './BackendLayoutModule';

const routes: Routes = [
  {
    path: '',
    component: BackendLayoutModule,
    children: [
      {
        path: 'index', loadChildren: () => import('../../index/IndexModule')
          .then(m => m.IndexModule)
      },      
      {
        path: 'auth', loadChildren: () => import('../../auth/AuthModule')
          .then(m => m.AuthModule)
      },      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BackendLayoutModuleRoute { }