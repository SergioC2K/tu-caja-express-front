import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminProfileComponent } from "./admin-profile";
import { BoxesComponent } from "./boxes";
import { CellarsComponent } from "./cellars";
import { ClaimsComponent } from "./claims";
import { CountriesComponent } from "./countries";
import { LockerComponent } from "./locker";
import { NewGuideComponent } from "./new-guide";
import { OfficeComponent } from "./office";
import { PackagesComponent } from "./packages";
import { PrintRoutesComponent } from "./print-routes";
import { ProgramComponent } from "./program";
import { SalesComponent } from "./sales";
import { SearchGuideComponent } from "./search-guide";
import { ServicesComponent } from "./services";
import { SurveysComponent } from "./surveys";
import { AgencyComponent } from "./agency";
import { ClientComponent } from "./client";
import { ContainersComponent } from "./containers";
import { PrintReportComponent } from "./print-report";
import { ZoneAndPricesComponent } from "./packages/zone-and-prices";
import { SpecialGroupsComponent } from "./packages/special-groups";
import { GuideForWeightComponent } from "./packages/guide-for-weight";
import { GuideForPackagesComponent } from "./packages/guide-for-packages";

const routes: Routes = [
  {
    component: AdminProfileComponent,
    path: "profile"
  },
  {
    component: AgencyComponent,
    path: "agency"
  },
  {
    component: BoxesComponent,
    path: "boxes"
  },
  {
    component: CellarsComponent,
    path: "cellars"
  },
  {
    component: ClaimsComponent,
    path: "claims"
  },
  {
    component: CountriesComponent,
    path: "countries"
  },
  {
    component: ClientComponent,
    path: "clients"
  },
  {
    component: LockerComponent,
    path: "locker"
  },
  {
    component: NewGuideComponent,
    path: "new-guide"
  },
  {
    component: OfficeComponent,
    path: "offices"
  },
  {
    component: PackagesComponent,
    path: "packages"
  },
  {
    component: GuideForPackagesComponent,
    path: "guide-for-packages"
  },
  {
    component: GuideForWeightComponent,
    path: "guide-for-weight"
  },
  {
    component: SpecialGroupsComponent,
    path: "special-groups"
  },
  {
    component: ZoneAndPricesComponent,
    path: "zone-and-prices"
  },
  {
    component: PrintRoutesComponent,
    path: "print-routes"
  },
  {
    component: PrintReportComponent,
    path: "print-report"
  },
  {
    component: ProgramComponent,
    path: "program"
  },
  {
    component: SalesComponent,
    path: "sales"
  },
  {
    component: SearchGuideComponent,
    path: "search-guide"
  },
  {
    component: ServicesComponent,
    path: "services"
  },
  {
    component: SurveysComponent,
    path: "surveys"
  },
  {
    component: ContainersComponent,
    path: "container"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
