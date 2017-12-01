import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { RouteName } from "../enums/route-name.enum";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    let isLoggedIn = this.authService.isLoggedIn();
    if(!isLoggedIn) {
      this.router.navigate([`/${RouteName.Login}`]);
    }
    return isLoggedIn;

  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return undefined;
  // }

}
