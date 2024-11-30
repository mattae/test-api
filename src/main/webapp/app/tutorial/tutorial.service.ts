import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TutorialService {
    private http = inject(HttpClient);

    private resourceUrl = '/api/es/tutorials';

    getTutorials(): Observable<any[]> {
        return this.http.get<any[]>(this.resourceUrl);
    }

    updateTutorial(tutorial: any): Observable<any> {
        return this.http.put<any>(this.resourceUrl, tutorial);
    }

    saveTutorial(tutorial: any): Observable<any> {
        return this.http.post<any>(this.resourceUrl, tutorial);
    }

    deleteTutorial(id: number): Observable<any> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`);
    }

    getTutorial(id: any): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}/${id}`);
    }

    getTutorialsByTitle(title: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.resourceUrl}/title?title=${title}`);
    }
}
