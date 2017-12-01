import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from "./shared/services/auth-guard.service";
import { RouteName } from "./shared/enums/route-name.enum";


const routes: Routes = [
  {
    path: '',
    redirectTo: RouteName.Home,
    pathMatch: 'full'
  },
  {
    path: RouteName.Home,
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RouteName.Login,
    component: LoginComponent
  },
  {
    path: RouteName.Register,
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRouterModule { }
