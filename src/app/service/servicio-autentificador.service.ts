import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutentificadorService {
  estaLoggeado: boolean = false;
  constructor() { }
  loggearse() {
    this.estaLoggeado = true;
  }

  desloggearse() {
    this.estaLoggeado = false;
  }
}
