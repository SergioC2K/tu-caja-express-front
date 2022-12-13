import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicesComponent } from "../admin";
import { ContactComponent } from "./contact";
import { CoverageComponent } from "./coverage";
import { UsComponent } from "./us";
import { BeginningComponent } from "./beginning";


const routes: Routes = [
  { path: "beginning", component: BeginningComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
  { path: "coverage", component: CoverageComponent },
  { path: "us", component: UsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
