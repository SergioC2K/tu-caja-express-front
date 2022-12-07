import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminProfileComponent} from './admin-profile';
import {BoxesComponent} from './boxes';
import {CellarsComponent} from './cellars';
import {ClaimsComponent} from './claims';
import {CountriesComponent} from './countries';
import {LockerComponent} from './locker';
import {NewGuideComponent} from './new-guide';
import {OfficeComponent} from './office';
import {PackagesComponent} from './packages';
import {PrintRoutesComponent} from './print-routes';
import {ProgramComponent} from './program';
import {SalesComponent} from './sales';
import {SearchGuideComponent} from './search-guide';
import {ServicesComponent} from './services';
import {SurveysComponent} from './surveys';
import {AgencyComponent} from './agency';
import {ClientComponent} from './client';

const routes: Routes = [
  {
    component: AdminProfileComponent,
    path: 'profile',
  },
  {
    component: AgencyComponent,
    path: 'agency',
  },
  {
    component: BoxesComponent,
    path: 'boxes',
  },
  {
    component: CellarsComponent,
    path: 'cellars',
  },
  {
    component: ClaimsComponent,
    path: 'claims',
  },
  {
    component: CountriesComponent,
    path: 'countries',
  },
  {
    component: ClientComponent,
    path: 'clients',
  },
  {
    component: LockerComponent,
    path: 'locker',
  },
  {
    component: NewGuideComponent,
    path: 'new-guide',
  },
  {
    component: OfficeComponent,
    path: 'offices',
  },
  {
    component: PackagesComponent,
    path: 'packages',
  },
  {
    component: PrintRoutesComponent,
    path: 'print-routes',
  },
  {
    component: ProgramComponent,
    path: 'program',
  },
  {
    component: SalesComponent,
    path: 'sales',
  },
  {
    component: SearchGuideComponent,
    path: 'search-guide',
  },
  {
    component: ServicesComponent,
    path: 'services',
  },
  {
    component: SurveysComponent,
    path: 'surveys',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
