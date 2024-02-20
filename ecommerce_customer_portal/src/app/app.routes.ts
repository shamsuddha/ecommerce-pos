import { Routes } from '@angular/router';
import { MainModuleComp } from './module/MainModuleComp';


export const routeList: Routes = [

  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'module', redirectTo: '/module/dashboard', pathMatch: 'full' },

  {
    path: '', loadChildren: () => import('./layout/frontend/FrontendLayoutModule').then(m => m.FrontendLayoutModule)
  },

  {
    path: 'module',
    component: MainModuleComp,
    loadChildren: () => import('./module/MainModule').then(m => m.MainModule)
  }
  
];


//export const routes: Routes = [];
