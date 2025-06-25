import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'clients',
        loadChildren: () => import('app/modules/gym-owner/apps/clients/clients.routes')
    },
    
        
        { path: '**', redirectTo: '' },
    
];
