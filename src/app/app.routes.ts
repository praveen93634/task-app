import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',loadComponent:()=>import('./home-layout/home-layout').then(x=>x.HomeLayout)
    }
];
