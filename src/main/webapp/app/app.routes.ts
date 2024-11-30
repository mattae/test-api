import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'classy'
        },
        children: [
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('./tutorial/plugin.routing')
            }
        ]
    }
];
