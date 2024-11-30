import { Component, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterOutlet, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { TutorialListComponent } from './components/list/tutorial-list.component';
import { TutorialService } from './tutorial.service';
import { TutorialDetailsComponent } from './components/details/tutorial.details.component';
import { catchError, EMPTY, mergeMap, Observable, of } from 'rxjs';


const tutorialResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
    const id = route.params['id'] ? route.params['id'] : null;
    const router = inject(Router);
    const service = inject(TutorialService);
    // @ts-ignore
    return service.getTutorial(id).pipe(
        catchError((err) => {
            router.navigateByUrl('/tutorials');
            return EMPTY;
        }),
        mergeMap((res: any) => {
            return of(res);
        })
    );
}

const tutorialsResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] => {
    return inject(TutorialService).getTutorials();
}

const canDeactivateTutorialDetails = (
    component: TutorialDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/plugins'
    // it means we are navigating away from the
    // plugin manager app
    if (!nextState.url.includes('/tutorials')) {
        // Let it navigate
        return true;
    }

    // If we are navigating to another plugin...
    if (nextState.url.includes('/details')) {
        // Just navigate
        return true;
    }
    // Otherwise...
    else {
        // Close the drawer first, and then navigate
        return component.closeDrawer().then(() => true);
    }
}

@Component({
    selector: 'tutorial-manager',
    template: '<router-outlet></router-outlet>',
    imports: [
        RouterOutlet
    ],
    })
export class TutorialManagerComponent {

}

export default [
    {
        path: '',
        component: TutorialManagerComponent,
        providers: [
            TutorialService
        ],
        children: [
            {
                path: '',
                component: TutorialListComponent,
                resolve: {
                    tutorials: tutorialsResolve
                },
                data: {
                    title: 'PLUGINS.TUTORIAL.TITLES.TUTORIALS'
                },
                children: [
                    {
                        path: 'details/:id',
                        component: TutorialDetailsComponent,
                        resolve: {
                            tutorial: tutorialResolve
                        },
                        data: {
                            authorities: ['ROLE_USER'],
                            title: 'PLUGINS.TUTORIAL.TITLES.TUTORIAL_DETAILS'
                        },
                        canDeactivate: [canDeactivateTutorialDetails]
                    },
                    {
                        path: 'details',
                        component: TutorialDetailsComponent,
                        data: {
                            title: 'PLUGINS.TUTORIAL.TITLES.NEW_TUTORIAL'
                        },
                        canDeactivate: [canDeactivateTutorialDetails]
                    }
                ]
            }
        ]
    }
] as Routes;

