import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../shared";
import { PackagesComponent } from "./packages.component";
import { MaterialModule } from "../../material.module";
import { GuideForWeightComponent } from "./guide-for-weight";
import { ZoneAndPricesComponent } from "./zone-and-prices";
import { GuideForPackagesComponent } from "./guide-for-packages";
import { SpecialGroupsComponent } from "./special-groups";
import { RouterModule } from "@angular/router";
import { CreatePackageDialogComponent } from './create-package-dialog/create-package-dialog.component';


@NgModule({
  declarations: [PackagesComponent, GuideForWeightComponent, ZoneAndPricesComponent, GuideForPackagesComponent, SpecialGroupsComponent, CreatePackageDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    RouterModule
  ]
})
export class PackagesModule {
}
