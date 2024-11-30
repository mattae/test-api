import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import {FormGroup, ReactiveFormsModule, UntypedFormBuilder, Validators} from '@angular/forms';
import {TutorialService} from '../../tutorial.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {MatDrawerToggleResult} from '@angular/material/sidenav';
import {TutorialListComponent} from '../list/tutorial-list.component';
import {MatButtonModule} from "@angular/material/button";

import {TranslocoModule} from "@jsverse/transloco";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {catchError, EMPTY, finalize, map} from "rxjs";
import {FuseAlertComponent, FuseAlertType} from "@mattae/angular-shared";

@Component({
    selector: 'tutorial-details',
    templateUrl: './tutorial.detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    RouterLink,
    TranslocoModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FuseAlertComponent
],
    })
export class TutorialDetailsComponent implements OnInit {
    private _tutorialService = inject(TutorialService);
    private _activatedRoute = inject(ActivatedRoute);
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _fb = inject(UntypedFormBuilder);
    private _router = inject(Router);
    private tutorialListComponent = inject(TutorialListComponent);

    tutorial: any;
    pathHasId = false;

    editMode: boolean = false;
    formGroup: FormGroup;
    showAlert = false;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };

    constructor() {
        const _fb = this._fb;


        this.formGroup = _fb.group({
            id: [],
            title: ['', Validators.required],
            description: ['', [Validators.required]],
            published: false
        });
    }

    ngOnInit(): void {
        this.tutorialListComponent.matDrawer().open();
        this.pathHasId = !!this._activatedRoute.snapshot.params['id'];
        this._activatedRoute.data.subscribe(({tutorial}) => {
            if (tutorial) {
                this.tutorial = tutorial;
                this.formGroup.patchValue(tutorial);
            } else {
                this.editMode = true;
                this.tutorial = {}
            }

            this._changeDetectorRef.markForCheck();
        });
    }

    closeDrawer(): Promise<MatDrawerToggleResult> {
        return this.tutorialListComponent.matDrawer().close();
    }

    toggleEditMode(editMode: boolean | null = null): void {
        if (editMode === null) {
            this.editMode = !this.editMode;
        } else {
            this.editMode = editMode;
        }

        this._changeDetectorRef.markForCheck();
    }

    save(): void {
        this.tutorial = this.formGroup.value;
        this.showAlert = false;

        this._tutorialService.saveTutorial(this.tutorial).pipe(
            map(res => {
                this.tutorial = res;
                this.alert.message = 'PLUGINS.TUTORIAL.DETAILS.SAVE.SUCCESS';
            }),
            catchError(error => {
                this.alert = {
                    message: 'PLUGINS.TUTORIAL.DETAILS.SAVE.ERROR',
                    type: 'error'
                }
                return EMPTY;
            }),
            finalize(() => {
                this.editMode = false;
                this.showAlert = true;

                this._changeDetectorRef.markForCheck();
            })
        ).subscribe();
    }

    delete() {
        this._tutorialService.deleteTutorial(this.tutorial.id).subscribe(res => {
            this._router.navigate(['../..'])
        })
    }
}
