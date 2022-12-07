import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from './interceptor.service';


@NgModule({
  imports: [CommonModule],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
    },
  ],
})
export class CoreModule {
}
