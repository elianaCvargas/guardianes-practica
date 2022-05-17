import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './page/login/login.component';
import { BackOfficeComponent } from './page/back-office/back-office.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { ErrorComponent } from './page/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackOfficeComponent,
    BienvenidaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
