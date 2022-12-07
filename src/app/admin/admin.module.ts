import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {NewGuideComponent} from './new-guide';
import {ProgramComponent} from './program';
import {PrintRoutesComponent} from './print-routes';
import {SearchGuideComponent} from './search-guide';
import {AdminProfileComponent} from './admin-profile';
import {BoxesComponent} from './boxes';
import {CellarsComponent} from './cellars';
import {SalesComponent} from './sales';
import {SurveysComponent} from './surveys';
import {OfficeComponent} from './office';
import {PackagesComponent} from './packages';
import {LockerComponent} from './locker';
import {ServicesComponent} from './services';
import {ClaimsComponent} from './claims';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';
import {ComponentsModule} from '../shared';
import {ButtonModule} from '../shared/components/button/button.module';
import {ProgramDialogComponent} from './program/program-dialog';
import {DialogToolbarModule} from '../shared/components/dialog-toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {AgencyDialogComponent, AgencyComponent} from './agency';
import { ClientComponent } from './client';
import { ClientDialogComponent } from "./client/client-dialog";
import { CountriesModule } from "./countries";

@NgModule({
  declarations: [
    NewGuideComponent,
    ProgramComponent,
    PrintRoutesComponent,
    SearchGuideComponent,
    AdminProfileComponent,
    BoxesComponent,
    CellarsComponent,
    SalesComponent,
    SurveysComponent,
    OfficeComponent,
    PackagesComponent,
    LockerComponent,
    ServicesComponent,
    ClaimsComponent,
    ProgramDialogComponent,
    AgencyComponent,
    AgencyDialogComponent,
    ClientComponent,
    ClientDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexModule,
    SharedModule,
    ButtonModule,
    DialogToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    CountriesModule
  ]
})
export class AdminModule {
}
