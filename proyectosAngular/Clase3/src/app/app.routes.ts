import { Routes } from '@angular/router';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { SidebarComponent } from './Shared/components/sidebar/sidebar.component';

export const routes: Routes = [
    {
        path: " ",
        component: MyTestComponentComponent

    },{
        path: "Auth",
        component: MyTestComponentComponent
    },
    {
        path: "sidebar",
        component: SidebarComponent
    }
];
