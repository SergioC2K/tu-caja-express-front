import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {FlexModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexModule,
    IvyCarouselModule,
    RouterModule
  ]
})
export class HomeModule {
}
