import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routeList: Routes = [
  {
    path: 'module',
    loadChildren: () => import('./module/MainModule').then(m => m.MainModule)
  }
];


//export const routes: Routes = [];
