import { Minuta } from './minuta';
import { Usuario } from './usuario';
export class MinutaAsistentes{
    id:string="";
    idMinuta: Minuta=new Minuta();
    idUsuarioAsistente: Usuario=new Usuario();
    aprobacion:string="";
    fechaAprobacion: Date=new Date();
}