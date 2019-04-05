
import { Usuario } from './usuario'

export class Proyecto {
    id: string = '';
    nombre: string = '';
    descripcion: string = '';
    idUsuarioAlta: Usuario=new Usuario();
    idUsuarioModificacion: Usuario=new Usuario();
    estatus: string='';
}