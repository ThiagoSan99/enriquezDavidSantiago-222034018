import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [

    {
        path: '',
        component:HomePageComponent
    },
    {
        path: 'auth',//pagina autenticacion, renderiza el componente auth
        component:AuthPageComponent
    },
    {
        path: 'sidebar',
        component:SidebarPageComponent
    }
];
