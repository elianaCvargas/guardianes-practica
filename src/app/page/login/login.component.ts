import { Component, OnInit } from '@angular/core';
import { ServicioAutentificadorService } from 'src/app/service/servicio-autentificador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicioAuth: ServicioAutentificadorService) { }

  ngOnInit(): void {
  }

  ingresar() {
    console.log("ingresando");
    this.servicioAuth.loggearse();
  }

}
