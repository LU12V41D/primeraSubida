import { Usuario } from "./usuario";
import { Proyecto } from './proyecto';

export class ProyectoFase{
    id:string="";
    idProyecto:Proyecto =new Proyecto();
    nombre:string="";
    fechaCompromiso:Date=new Date();
    fechaTermino:Date = new Date();
    orden: string = "";
    idUsuarioAlta: Usuario =new Usuario();
    idUsuarioModificacion: Usuario = new Usuario;
    estatus:string="";
    

}