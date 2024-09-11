import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('before called to server', request);
    
    const newRequest = request.clone({
      setHeaders : {
        'x-rapidapi-key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
       'x-rapidapi-host': 'vinted3.p.rapidapi.com',
      }
    })
    return next.handle(newRequest);
  }
}
