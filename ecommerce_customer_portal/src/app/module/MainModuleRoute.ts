import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/module/dashboard', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/DashboardModule')
          .then(m => m.DashboardModule)
      },
      {
        path: 'category', loadChildren: () => import('./category/CategoryModule')
          .then(m => m.CategoryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
