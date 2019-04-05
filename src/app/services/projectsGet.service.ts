import { TareaRelacion } from './../models/tareaRelacion';
import { TareaDocumentos } from './../models/tareaDocumentos';
import { Tarea } from '../models/tarea';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { Minuta } from '../models/minuta';
import { ProyectoFaseTarea } from '../models/proyectoFaseTarea';
import { MinutaAsistentes } from '../models/minutaAsistentes';
import { MinutaTareas } from '../models/minutaTareas';
import { ProyectoFase } from '../models/proyectoFase';
import { ProyectoUsuario } from '../models/proyectoUsuario';



@Injectable({
  providedIn: 'root'
})
export class ProjectsGetService {

  constructor(private http: HttpClient) { }

  
  getTarea(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<Tarea>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/tarea/0', httpOptions);
  }

  getProyecto(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<Proyecto>( 'https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyecto/0',httpOptions);
  }

  getMinuta(): Observable<Minuta>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<Minuta>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/minuta/0',httpOptions);
  }
  getPFT(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<ProyectoFaseTarea>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyectoFaseTarea/0',httpOptions);

  }
  getMinutaAsistentes(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<MinutaAsistentes>(' https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/minutaAsistentes/0'    ,httpOptions);

  }
  getMinutaTareas(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<MinutaTareas>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/minutaTareas/0',httpOptions);

  }
  getProyectoFase(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<ProyectoFase>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyectoFase/0',httpOptions);

  }
  getProyectoUsuario(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<ProyectoUsuario>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyectoUsuarios/0',httpOptions);

  }
  getTareaDocumentos(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<TareaDocumentos>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/tareaDocumentos/0',httpOptions);

  }
  getTareaRelacion(){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get<TareaRelacion>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/tareaRelacion/0',httpOptions);

  }
 
 
}


