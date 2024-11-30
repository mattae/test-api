import { inject, isDevMode, provideEnvironmentInitializer } from '@angular/core';
import { canMatch, StylesheetService } from '@mattae/angular-shared';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        providers: [
            provideEnvironmentInitializer(() => {
                inject(StylesheetService).loadStylesheet(isDevMode() ? 'http://localhost:53167/styles.css':'/js/access-management/styles.css')
            })
        ],
        children: [
            {
                path: 'tutorials',
                loadChildren: () => import('./tutorial.routing').then(r => r.default),
            }
        ]
    }
];

export default routes;
