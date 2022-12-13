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
import { ServicesComponent } from "./services";
import { HomeRoutingModule } from "./home-routing.module";
import { BeginningComponent } from "./beginning";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    CoverageComponent,
    UsComponent,
    ContactComponent,
    ServicesComponent,
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
    HomeRoutingModule
  ]
})
export class HomeModule {
}
