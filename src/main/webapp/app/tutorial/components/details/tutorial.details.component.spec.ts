import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {TutorialDetailsComponent} from "./tutorial.details.component";

describe('TutorialDetailsComponent', () => {
    let component: TutorialDetailsComponent;
    let fixture: ComponentFixture<TutorialDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TutorialDetailsComponent],
            schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements and attributes
        });

        fixture = TestBed.createComponent(TutorialDetailsComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle edit mode', () => {
        expect(component.editMode).toBe(false);
        component.toggleEditMode();
        expect(component.editMode).toBe(true);
    });

    // Add more tests as needed for your component's functionality
});
