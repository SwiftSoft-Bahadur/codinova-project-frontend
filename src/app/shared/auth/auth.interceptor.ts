import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    request = request.clone({
      setHeaders: {
        'X-CoinAPI-Key': '3A9F510E-31CC-43DD-BCD5-140A073D785E',
      }
    });
    return next.handle(request);

  }

}
