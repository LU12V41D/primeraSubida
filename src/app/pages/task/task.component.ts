import { ProjectsPostService } from '../../services/projectsPost.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import  Swal  from 'sweetalert2';
import { BlockUI , NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 title='Registro Tarea';
  form: FormGroup;
  @ BlockUI ('verified_task') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private project: ProjectsPostService){
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
  }
 
  ngOnInit(){
    this.form=this.formBuilder.group({

      id: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      duracion:new FormControl('',[Validators.required]),
      idUsuarioAprobacion: new FormControl('',[Validators.required]),
      idUsuarioAsignado:new FormControl(''),
      tiempoEstimado: new FormControl('',[Validators.required]),
      idUsuarioAlta: new FormControl(''),
      idUsuarioModificacion: new FormControl(''),
      estatus:new FormControl('',[Validators.required])

     /*nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
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
     urlImagen: new FormControl('', [Validators.required]),
     
     mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
     date: new FormControl('', [Validators.required])*/
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
          title: `Tarea ${this.form.value.id} Registrada con exito!!!`
        })
              this.enviar(this.form.value);
      }
      this.blockUI.stop();
    }, 2000);
  })
 }
 enviar(formValue: any){
  const tarea: Tarea = new Tarea();
  tarea.id=formValue.id,
  tarea.nombre=formValue.nombreTarea,
  tarea.descripcion=formValue.descripcion,
  tarea.duracion=formValue.duracion,
  tarea.idUsuarioAprobacion=formValue.idUsuarioAprobacion,
  tarea.idUsuarioAsignado=formValue.idUsuarioAsignado,
  tarea.idUsuarioAlta=formValue.idUsuarioAlta,
  tarea.idUsuarioModificacion=formValue.idUsuarioModificacion,
  tarea.tiempoEstimado=formValue.tiempoEstimado,
  tarea.estatus=formValue.estatus,
  this.project.insertTarea(tarea).subscribe(
    res => {
      console.log(`Tarea con id=${tarea.id} registrado con exito`);
    },err => {
      console.log('Lo siento algo salio mal', err);
  })
  console.log(tarea);

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
    id: "",
    nombre: "",
    descripcion: "",
    duracion:"",
    idUsuarioAprobacion: "",
    idUsuarioAsignado:"",
    tiempoEstimado: 0,
    idUsuarioAlta: "",
    idUsuarioModificacion: "",
    estatus: ""

  });
}


}
