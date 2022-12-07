import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('auth-token');
    let request = req;
    if (token) {
      request = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )
    }
    return next.handle(request);
  }
}
