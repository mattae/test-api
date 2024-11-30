import { Injectable } from '@angular/core';
import { FuseNavigationItem } from '@mattae/angular-shared';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    navigations(): FuseNavigationItem[] {
        return [
            {
                title:'Home',
                type: 'basic',
                link: '/',
                icon: 'heroicons_outline:home'
            },
            {
                title:'PLUGINS.TUTORIAL.TITLE',
                type: 'basic',
                link: 'tutorials',
                icon: 'library_books'
            }
        ]
    }
}
