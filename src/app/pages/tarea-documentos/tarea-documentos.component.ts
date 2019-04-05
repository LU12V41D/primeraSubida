import { TareaDocumentos } from './../../models/tareaDocumentos';
import { ProjectsPostService } from './../../services/projectsPost.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-tarea-documentos',
  templateUrl: './tarea-documentos.component.html',
  styleUrls: ['./tarea-documentos.component.css']
})
export class TareaDocumentosComponent implements OnInit {
title='Registro Tarea-Documentos';
form: FormGroup;
@ BlockUI ('verified_taDo') blockUI : NgBlockUI;
constructor(private formBuilder: FormBuilder, private servicio: ProjectsPostService) {
  this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
 }

ngOnInit() {
  this.form=this.formBuilder.group({
    id:new FormControl(''),
    idTarea: new FormControl('',[Validators.required]),
    urlDocumento:new FormControl('',[Validators.required]),
    idUsuarioResponsable:new FormControl(''),
    idUsuarioAlta: new FormControl(''),
    idUsuarioModificacion: new FormControl(''),
    estatus:new FormControl('',[Validators.required])
  });

}
enviar(formValue: any){
 const tareaDocument : TareaDocumentos= new TareaDocumentos();
 tareaDocument.id=formValue.id,
 tareaDocument.idTarea=formValue.idTarea,
 tareaDocument.urlDocumento=formValue.urlDocumento,
 tareaDocument.idUsuarioResponsable=formValue.idUsuarioResponsable,
 tareaDocument.idUsuarioAlta=formValue.idUsuarioAlta,
 tareaDocument.idUsuarioModificacion=formValue.idUsuarioModificacion,
 tareaDocument.estatus=formValue.estatus,
 this.servicio.insertTareaDocumentos(tareaDocument).subscribe(
  res => {
    console.log(`TareaDocumentos con id=${tareaDocument.id} registrado con exito`);
  },err => {
    console.log('Lo siento algo salio mal', err);
})
console.log(tareaDocument);
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
          title: `TareaDocumentos ${this.form.value.id} registrado con exito!!!`
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
    id:"",
    idTarea:"",
    urlDocumento:"",
    idUsuarioResponsable:"",
    idUsuarioAlta:"",
    idUsuarioModificacion:"",
    estatus:"",
  });
}
}
