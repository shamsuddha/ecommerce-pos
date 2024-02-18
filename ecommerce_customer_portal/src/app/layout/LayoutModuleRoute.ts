import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModuleComp } from './LayoutModuleComp';

const routes: Routes = [
  {
    path: '',
    component:LayoutModuleComp,
    children: [
      {
        path: 'index', loadChildren: () => import('./../index/IndexModule')
          .then(m => m.IndexModule)
      },      
      {
        path: 'auth', loadChildren: () => import('./../auth/AuthModule')
          .then(m => m.AuthModule)
      },      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutModuleRoute { }