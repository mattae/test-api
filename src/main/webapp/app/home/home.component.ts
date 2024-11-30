import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-home',
    imports: [
        TranslocoPipe
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor() {
    }
}
