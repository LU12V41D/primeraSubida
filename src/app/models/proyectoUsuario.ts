import { Proyecto } from './proyecto';
import { Usuario } from './usuario';

export class ProyectoUsuario{
  idProyectoUsuario:string = "";
  idProyecto: Proyecto= new Proyecto();
  idUsuario: Usuario= new Usuario();
  idUsuarioAlta: Usuario= new Usuario();
  idUsuarioModificacion:Usuario = new Usuario();
  estatus:string ="";
}