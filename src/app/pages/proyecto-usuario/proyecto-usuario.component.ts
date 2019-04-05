import { ProyectoUsuario } from './../../models/proyectoUsuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectsPostService } from '../../services/projectsPost.service';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-proyecto-usuario',
  templateUrl: './proyecto-usuario.component.html',
  styleUrls: ['./proyecto-usuario.component.css']
})
export class ProyectoUsuarioComponent implements OnInit {
title='Registro Proyecto-Usuario';
form:FormGroup;

@ BlockUI ('verified_proUser') blockUI : NgBlockUI;
constructor(private formBuilder: FormBuilder, private  servicio: ProjectsPostService) {
  this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
 }

ngOnInit() {
  this.form=this.formBuilder.group({
    idProyectoUsuario: new FormControl(''),
    idProyecto: new FormControl('',[Validators.required]),
    idUsuario: new FormControl('',[Validators.required]),
    idUsuarioAlta: new FormControl('',[Validators.required]),
    idUsuarioModificacion: new FormControl('',[Validators.required]), 
    estatus: new FormControl('',[Validators.required]),

  });

}
enviar(formValue:any){
  const proyectoUsuario: ProyectoUsuario =new ProyectoUsuario();
  proyectoUsuario.idProyectoUsuario = formValue.id,
  proyectoUsuario.idProyecto = formValue.idProyecto,
  proyectoUsuario.idUsuario = formValue.idUsuario,
  proyectoUsuario.idUsuarioAlta = formValue.idUsuarioAlta,
  proyectoUsuario.idUsuarioModificacion = formValue.idUsuarioModificacion,
  proyectoUsuario.estatus = formValue.estatus,
  this.servicio.insertProyectoUsuario(proyectoUsuario).subscribe(
    res => {
      console.log(`ProyectoUsuario con id=${proyectoUsuario.idProyectoUsuario} registrado con exito`);
    },err => {
      console.log('Lo siento algo salio mal', err);
  })
  console.log(proyectoUsuario);
 
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
          title: `ProyectoUsuario ${this.form.value.idProyectoUsuario} registrado con exito!!!`
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
  idProyectoUsuario:"",
  idProyecto:"", 
  idUsuario:"", 
  idUsuarioAlta:"", 
  idUsuarioModificacion:"", 
  estatus: "",
});
}

}
