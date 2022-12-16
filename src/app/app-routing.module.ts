import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LayoutsComponent } from "./layouts/layouts.component";


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    loadChildren: () => import("./home").then((h) => h.HomeModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./login/login.module").then((l) => l.LoginModule)
  },
  {
    path: "admin",
    component: LayoutsComponent,
    loadChildren: () => import("./admin/admin.module").then((a) => a.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
