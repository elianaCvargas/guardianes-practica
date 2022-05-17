import { Component, OnInit } from '@angular/core';
import { ServicioAutentificadorService } from 'src/app/service/servicio-autentificador.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {

  constructor(private servicioAuth: ServicioAutentificadorService) { }


  ngOnInit(): void {
  }

  salir() {
    this.servicioAuth.desloggearse();
  }

}
