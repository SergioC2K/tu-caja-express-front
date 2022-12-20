import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact";
import { CoverageComponent } from "./coverage";
import { UsComponent } from "./us";
import { BeginningComponent } from "./beginning";
import { HomeServicesNiComponent } from "./home-serviceni";
import { HomeServicesPaComponent } from "./home-servicepa";
import { HomeServicesPpComponent } from "./home-servicepp";

const routes: Routes = [
  { path: "beginning", component: BeginningComponent },
  { path: "hserviceni", component: HomeServicesNiComponent },
  { path: "hservicepa", component: HomeServicesPaComponent },
  { path: "hservicepp", component: HomeServicesPpComponent },
  { path: "contact", component: ContactComponent },
  { path: "coverage", component: CoverageComponent },
  { path: "us", component: UsComponent },
  { path: "**", redirectTo: "beginning", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
