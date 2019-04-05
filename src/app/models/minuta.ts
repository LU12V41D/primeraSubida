import { Usuario } from "./usuario";
import { Proyecto } from './proyecto';

export class Minuta {
    id: string = '';
    nombre: string = '';
    descripcion: string = '';
    idProyecto:Proyecto = new Proyecto();
    urlAudioSesion: string="";
    fechaSesion:Date = new Date();
    idUsuarioAlta:Usuario=new Usuario();
    idUsuarioModificacion:Usuario = new Usuario();
    estatus:string="";
}
