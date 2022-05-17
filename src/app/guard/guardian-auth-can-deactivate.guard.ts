import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackOfficeComponent } from '../page/back-office/back-office.component';
import { ServicioAutentificadorService } from '../service/servicio-autentificador.service';

@Injectable({
  providedIn: 'root'
})

export class GuardianAuthCanDeactivateGuard implements CanDeactivate<BackOfficeComponent> {
  constructor(private servicioAuth: ServicioAutentificadorService, private route: Router) { }

  canDeactivate(
    backoffice: BackOfficeComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.servicioAuth.estaLoggeado)
      return true;
    return false;
  }

}
