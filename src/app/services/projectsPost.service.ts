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
export class ProjectsPostService {

  constructor(private http: HttpClient) { }

  
 
  insertTarea(tarea: Tarea){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<Tarea>(' https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/tarea/administrar', tarea, httpOptions);
  }

  insertProyect(proyecto: Proyecto){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<Proyecto>( 'https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyecto/administrar', proyecto, httpOptions);
  }

  insertMinuta(minuta: Minuta): Observable<Minuta>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<Minuta>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/minuta/administrar',minuta,httpOptions);
  }
  insertPFT(pft: ProyectoFaseTarea){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<ProyectoFaseTarea>(' https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyectoFaseTarea/administrar',pft,httpOptions);

  }
  insertMinutaAsistentes(minutaAsistentes: MinutaAsistentes){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<MinutaAsistentes>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/minutaAsistentes/administrar',minutaAsistentes,httpOptions);

  }
  insertMinutaTareas(minutaTareas: MinutaTareas){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<MinutaTareas>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/minutaTareas/administrar',minutaTareas,httpOptions);

  }
  insertProyectoFase(proyectoFase: ProyectoFase){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<ProyectoFase>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyectoFase/administrar',proyectoFase,httpOptions);

  }
  insertProyectoUsuario(proyectoUsuario: ProyectoUsuario){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<ProyectoUsuario>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/proyectoUsuarios/administrar',proyectoUsuario,httpOptions);

  }
  insertTareaDocumentos(tareaDocumento: TareaDocumentos){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<TareaDocumentos>('https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/tareaDocumentos/administrar',tareaDocumento,httpOptions);

  }
  insertTareaRelacion(tareaRelacion: TareaRelacion){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<TareaRelacion>(' https://x1ga4h9h2a.execute-api.us-east-2.amazonaws.com/dev/tareaRelacion/administrar',tareaRelacion,httpOptions);

  }
 
 
}


