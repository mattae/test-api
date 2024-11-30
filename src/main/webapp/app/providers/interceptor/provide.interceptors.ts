import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { apiInterceptor } from './api-service.interceptor';

export const provideInterceptor = (): Array<Provider | EnvironmentProviders> => {
    return [
        provideHttpClient(withInterceptors([apiInterceptor])),
    ];
};
