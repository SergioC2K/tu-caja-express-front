import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../shared";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem(this.authService.getTokenName());
    let request = req;
    if (token) {
      request = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      );
    }
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => this.errorHandling(error)));
  }

  private errorHandling(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}
