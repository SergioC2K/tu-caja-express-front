import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutsComponent} from './layouts/layouts.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then((l) => l.LoginModule)
  },
  {
    path: 'admin',
    component: LayoutsComponent,
    loadChildren:() => import('./admin/admin.module').then((l) => l.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
