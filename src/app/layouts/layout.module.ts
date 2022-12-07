import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar';
import {SidebarComponent} from './sidebar';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FlexModule} from '@angular/flex-layout';
import {SidebarMenuComponent} from './sidebar';
import {LayoutsComponent} from './layouts.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from '../admin/admin-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SidebarMenuComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class LayoutModule {
}
