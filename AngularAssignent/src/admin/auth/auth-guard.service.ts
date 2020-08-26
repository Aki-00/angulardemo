import { Injectable } from '@angular/core';
import { AuthService} from './auth.service'
import { Router, CanActivate, CanActivateChild,RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private authService:AuthService, private router:Router) { }


// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//   return this.authService.login().map((status) => {
//       if (status) {
//           return true;
//       }
//       this.router.navigate(["/admin/login"]);

//       return false;
//   });
// }

canActivate(): boolean {
  if (!this.authService.isAuthenticated()) {
    this.router.navigate(['login']);
    return false;
  }
  return true;
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  return this.canActivate(route, state);
}

}