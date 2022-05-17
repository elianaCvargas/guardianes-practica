import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioAutentificadorService } from '../service/servicio-autentificador.service';

@Injectable({
  providedIn: 'root'
})

export class GuardianAutentificadorGuard implements CanActivate {
  constructor(private servicioAuth: ServicioAutentificadorService, private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.servicioAuth.estaLoggeado == true) {
      return true;
    }

    this.route.navigate(['error']);
    return false;
  }

}
