import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const urlAWS="https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient) { }

  getUsuarios(){    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
   return this.http.get(urlAWS+'usuario/6f10c28f-300b-11e9-88f2-0a2f885f1280');
  }


  insertUser(usuario: Usuario): Observable<Usuario>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})};
    return this.http.post<Usuario>(urlAWS+'usuario/administrar/', usuario,httpOptions).pipe(
      tap((usuario) => console.log(`added usuario w/ id=${usuario.idUsuario}`)),
      catchError(this.handleError<any>('Registrar Usuario'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  updateUser(id: string | number, usuario: Usuario): Observable<Usuario>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})};
    return this.http.put('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/usuario/administrar/' + id, JSON.stringify(usuario), httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
  deleteUser(id: string | number): Observable<Usuario>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})};
    return this.http.delete<any>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/usuario/administrar/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted usuario id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
    );

  }
  getUsuario(id:string | number){    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
   return this.http.get(urlAWS+'usuario/'+id);
  }
}
