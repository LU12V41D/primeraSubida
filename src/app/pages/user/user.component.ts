import { UsuarioService } from './../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 usuario:any=[];
  
  @ BlockUI () blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder,private servicio:UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
    }, 2000);
   }
    modify: UserModify = {
    ​​​​idUsuario: '',
    nombre: '',
    apellidos: '',
    codigoPostal: '',
    ​​​correo:'',
    ​​​​direccion: '',
    ​​​​estatus: '',
    ​​​​fechaAlta: '',
    ​​​​fechaModificacion:'',
    ​​​​fechaNacimiento:'',
    ​​​​genero: '',
    ​​​​idUsuarioAlta: '',
    ​​​​idUsuarioModificacion: '',​​​​
    urlImagen: '',

    };
   
    ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      if (params.id) {
        this.servicio.getUsuario(params.id)
          .subscribe(
            res => {
              
              this.modify = res.resultado[0][0];
              console.log(this.modify);
            },
            err => console.log(err)
          )
      }
    }
  }
  export interface UserModify{
    ​​​​idUsuario: string,
    nombre: string,
    apellidos: string,
    codigoPostal: string,
    ​​​correo:string,
    ​​​​direccion: string,
    ​​​​estatus: string,
    ​​​​fechaAlta: string,
    ​​​​fechaModificacion:string,
    ​​​​fechaNacimiento: string,
    ​​​​genero: string,
    ​​​​idUsuarioAlta: string,
    ​​​​idUsuarioModificacion: string,​​​​
    urlImagen: string,
  };

