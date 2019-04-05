import { Usuario } from "./usuario";

export class Tarea {
    id: string = '';
    nombre: string = '';
    descripcion: string = '';
    duracion:string="";
    idUsuarioAprobacion: Usuario = new Usuario();
    idUsuarioAsignado:Usuario = new Usuario();
    tiempoEstimado: string="";
    idUsuarioAlta: Usuario = new Usuario();
    idUsuarioModificacion: Usuario = new Usuario();
    estatus:string='';
}
