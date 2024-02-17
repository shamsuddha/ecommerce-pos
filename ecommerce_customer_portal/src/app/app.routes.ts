import { Routes } from '@angular/router';
import { LayoutModuleComp } from './layout/LayoutModuleComp';
import { DashboardComp } from './module/dashboard/DashboardComp';
import { MainModuleComp } from './module/MainModuleComp';

export const routeList: Routes = [

  {
    path: '',
    component: LayoutModuleComp,
    loadChildren: () => import('./layout/LayoutModule').then(m => m.LayoutModule)
  },

  {
    path: 'module',
    component: MainModuleComp,
    loadChildren: () => import('./module/MainModule').then(m => m.MainModule)
  }
];



//export const routes: Routes = [];
1