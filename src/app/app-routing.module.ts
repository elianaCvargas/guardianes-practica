import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { BackOfficeComponent } from './page/back-office/back-office.component';
import { ErrorComponent } from './page/error/error.component';
import { GuardianAutentificadorGuard } from './guard/guardian-autentificador.guard';

const routes: Routes = [

  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'backoffice', component: BackOfficeComponent, canActivate: [GuardianAutentificadorGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
