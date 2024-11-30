import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { urls } from '../url.data.provider';

export const apiInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    return handleRequests(request, next);
}

const handleRequests = (request: HttpRequest<any>, next: HttpHandlerFn): any =>{
    const { url, method } = request;

    for (const element of urls) {
        if (url.includes(element.url) && element.active) {
            return of(new HttpResponse({ status: 200, body: element.json }));
        }
    }
    return next(request);
}
