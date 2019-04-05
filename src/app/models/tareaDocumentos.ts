import { Tarea } from './tarea';
import { Usuario } from './usuario';

export class TareaDocumentos{
    id:string="";
    idTarea: Tarea=new Tarea();
    urlDocumento:string="";
    idUsuarioResponsable:Usuario = new Usuario();
    idUsuarioAlta: Usuario = new Usuario();
    idUsuarioModificacion: Usuario = new Usuario();
    estatus:string ="";
}