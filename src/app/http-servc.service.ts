
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor Node.js

  constructor(private httpClient: HttpClient) { }
  chkConexion(): Observable<boolean> {
    return this.httpClient.get(`${this.baseUrl}/usuarios`).pipe(
      map(() => true), // Si la solicitud fue exitosa, devuelve true
      catchError(() => of(false)) // Si hubo un error, devuelve false
    );
 }
getUsuarios(): Observable<any[]> {
  return this.chkConexion().pipe(
    switchMap(conexionExitosa => {
      if (conexionExitosa) {
        return this.httpClient.get<any[]>(`${this.baseUrl}/usuarios`);
      } else {
        console.error('No se pudo conectar al servidor.');
        return EMPTY;
      }
    })
  );
}

getUsuarioById(id: number): Observable<any> {
  return this.chkConexion().pipe(
    switchMap(conexionExitosa => {
      if (conexionExitosa) {
        return this.httpClient.get<any>(`${this.baseUrl}/usuarios/${id}`);
      } else {
        console.error('No se pudo conectar al servidor.');
        return EMPTY;
      }
    })
  );
}
  }
 