import { Tarea } from './tarea';
import { Usuario } from './usuario';
import { Minuta } from './minuta';

export class MinutaTareas{
    id:string="";
    idMinuta:Minuta=new Minuta();
    idTarea:Tarea=new Tarea();
    idUsuarioAlta:Usuario =new Usuario;
    idUsuarioModificacion:Usuario =new Usuario;
    estatus:string ="";
}