import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { FlexModule } from "@angular/flex-layout";
import { MaterialModule } from "../material.module";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { RouterModule } from "@angular/router";
import { HomeNavbarComponent } from "./home-navbar";
import { CoverageComponent } from "./coverage";
import { UsComponent } from "./us";
import { ContactComponent } from "./contact";
import { HomeServicesNiComponent } from "./home-serviceni";
import { HomeServicesPaComponent } from "./home-servicepa";
import { HomeServicesPpComponent } from "./home-servicepp";
import { HomeRoutingModule } from "./home-routing.module";
import { BeginningComponent } from "./beginning";
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from "../shared";


@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    CoverageComponent,
    UsComponent,
    ContactComponent,
    HomeServicesPaComponent,
    HomeServicesNiComponent,
    HomeServicesPpComponent,
    BeginningComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexModule,
    IvyCarouselModule,
    RouterModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule {
}
