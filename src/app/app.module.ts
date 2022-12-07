import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home';
import {LayoutModule} from './layouts';
import {CoreModule} from './core/core.module';
import {LoginRoutingModule} from './login/login-routing.module';
import {LoginModule} from './login';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginRoutingModule,
    HomeModule,
    LayoutModule,
    CoreModule,
    LoginModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
