import { ProjectsPostService } from './../../services/projectsPost.service';
import { MinutaTareas } from './../../models/minutaTareas';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-minuta-tareas',
  templateUrl: './minuta-tareas.component.html',
  styleUrls: ['./minuta-tareas.component.css']
})
export class MinutaTareasComponent implements OnInit {
form: FormGroup;
title =' Registro Minuta-Tarea';
@ BlockUI ('verified_minutaTarea') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private servicio: ProjectsPostService) { 
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
      id: new FormControl(''),
      idMinuta: new FormControl('',[Validators.required]),
      idTarea: new FormControl('',[Validators.required]),
      idUsuarioAlta: new FormControl(''),
      idUsuarioModificacion: new FormControl(''),
      estatus: new FormControl('',[Validators.required]),
    });
  }
  enviar(formValue: any){
    const minutaTareas:MinutaTareas= new MinutaTareas();
    minutaTareas.id= formValue.id,
    minutaTareas.idMinuta= formValue.idMinuta,
    minutaTareas.idTarea= formValue.idTarea,
    minutaTareas.idUsuarioAlta= formValue.idUsuarioAlta,
    minutaTareas.idUsuarioModificacion= formValue.idUsuarioModificacion,
    minutaTareas.estatus= formValue.estatus,
    this.servicio.insertMinutaTareas(minutaTareas).subscribe(
      res => {
        console.log(`MinutaTareas con id=${minutaTareas.id} registrado con exito`);
      },err => {
        console.log('Lo siento algo salio mal', err);
    })
    console.log(minutaTareas);

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
            title: `MinutaTareas ${this.form.value.id} registrado con exito!!!`
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
  initializeFormGroup(){
    this.form.setValue({
    id:"",
    idMinuta:"",
    idTarea:"",
    idUsuarioAlta:"",
    idUsuarioModificacion:"",
    estatus:"",

    });
  }

}

