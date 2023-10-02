import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {  Observable } from 'rxjs';
import { authService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentcationGuard implements CanActivate {
  constructor(private auth: authService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Only if the user is a login and Store For LocalStorage
    let user = this.auth.getToken()?.length;
    if (user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}
