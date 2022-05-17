import { TestBed } from '@angular/core/testing';

import { ServicioAutentificadorService } from './servicio-autentificador.service';

describe('ServicioAutentificadorService', () => {
  let service: ServicioAutentificadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAutentificadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
