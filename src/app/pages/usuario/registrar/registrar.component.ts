import { UsuarioService } from '../../../services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  title='Registro Usuario';
  form: FormGroup;
  
  @ BlockUI ('verified_user') blockUI : NgBlockUI;
 constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService){
  this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     this.getUser()
    }, 2000);
    
 }

 

  ngOnInit(){
   this.form=this.formBuilder.group({
  nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
  apellidos: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
  codigoPostal: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(/^[0-9]*$/)]),
  ​​​correo:new FormControl('', [Validators.required, Validators.email]),
  ​​​​direccion: new FormControl('', [Validators.required]),
  ​​​​estatus: new FormControl('', [Validators.required]),
  ​​​​fechaAlta: new FormControl(new Date(), [Validators.required]),
  ​​​​fechaModificacion:new FormControl(new Date(), [Validators.required]),
  ​​​​fechaNacimiento: new FormControl('', [Validators.required]),
  ​​​​genero: new FormControl('', [Validators.required]),
  idUsuario: new FormControl('0'),
  ​​​​idUsuarioAlta: new FormControl(''),
  ​​​​idUsuarioModificacion: new FormControl(''),​​​​
  urlImagen: new FormControl('', [Validators.required])
 });
  }
  
  onSubmit(){
    (Swal as any).fire({
      title: 'Estas Seguro?',
      text: "Verifica que los datos sean los correctos!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviar'
    }).then((result:any) => {
      this.blockUI.start('Enviando!!!'); 
      setTimeout(() => {
        if (result.value) {
          const Toast = (Swal as any).mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: 'success',
            title: `Usuario ${this.form.value.idUsuario} Registrado con exito!!!`
          })
                this.enviar(this.form.value);
        }
        this.blockUI.stop();
      }, 2000);
    })
  }
  
  onClear() {
    this.blockUI.start('CANCELANDO...'); 
    setTimeout(() => {
      (Swal as any).fire({
        position: 'top-end',
        type: 'error',
        title: 'FORMULARIO CANCELADO',
        showConfirmButton: false,
        timer: 1000,
      })
      this.blockUI.stop(); 
      
    }, 1000);
    this.form.reset();
    this.initializeFormGroup();

   
  }
  initializeFormGroup() {
      this.form.setValue({
      idUsuario:"",
      nombre:"",
      apellidos:"",
      codigoPostal:"",
      correo:"",
      direccion:"",
      estatus:"",
      fechaAlta: new Date(),
      fechaModificacion:new Date(),
      fechaNacimiento: "",
      genero:"",
      idUsuarioAlta:"",
      idUsuarioModificacion:"",
      urlImagen:"",

    });
  }
  enviar(formValue: any){
    const user: Usuario = new Usuario();
    user.idUsuario=formValue.idUsuario,
    user.nombre=formValue.nombre,
    user.apellidos=formValue.apellidos,
    user.codigoPostal=formValue.codigoPostal,
    user.correo=formValue.correo,
    user.direccion=formValue.direccion,
    user.estatus=formValue.estatus,
    user.fechaAlta=formValue.fechaAlta,
    user.fechaModificacion=formValue.fechaModificacion,
    user.fechaNacimiento=formValue.fechaNacimiento,
    user.genero=formValue.genero,
    user.idUsuarioAlta=formValue.idUsuarioAlta,
    user.idUsuarioModificacion=formValue.idUsuarioModificacion,
    user.urlImagen=formValue.urlImagen,
    
      this.usuarioService.insertUser(user).subscribe(
        res => {
            console.log(`Usuario con id=${user.idUsuario} registrado con exito`);
        },(err) => {
          console.log('Lo siento algo salio mal',err);
        });
    console.log(user);
    
  }
getUser(){
  this.usuarioService.getUsuarios().subscribe(data=>{
    let dto=data;
    console.log(
      dto
    )
  })
}

}
