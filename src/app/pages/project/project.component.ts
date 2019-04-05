import  Swal  from 'sweetalert2';
import { ProjectsPostService } from './../../services/projectsPost.service';
import { Proyecto } from './../../models/proyecto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BlockUI , NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  form:FormGroup;
  title='Registro Proyecto';
  @ BlockUI ('verified_project') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private  servicio: ProjectsPostService) { 
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
    
  }
      
  ngOnInit() {
    this.form=this.formBuilder.group({
      id: new FormControl('0'),
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      idUsuarioAlta: new FormControl('',[Validators.required]),
      idUsuarioModificacion: new FormControl('',[Validators.required]),
      estatus: new FormControl('',[Validators.required])

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
            timer: 2000
          });
          Toast.fire({
            type: 'success',
            title: `Proyecto ${this.form.value.id} Registrado con exito!!!`
          })
                this.enviar(this.form.value);
        }
        this.blockUI.stop();
      }, 2000);
    })
    
  }
  enviar(formValue: any){
      const proyecto: Proyecto = new Proyecto();
      proyecto.id=formValue.id,
      proyecto.nombre=formValue.nombreProyecto,
      proyecto.descripcion=formValue.descripcion,
      proyecto.idUsuarioAlta=formValue.idUsuarioAlta,
      proyecto.idUsuarioModificacion=formValue.idUsuarioModificacion,
      proyecto.estatus=formValue.estatus,
      this.servicio.insertProyect(proyecto).subscribe(
        res => {
          console.log(`Proyecto con id=${proyecto.id} registrado con exito`);
        },err => {
          console.log('Lo siento algo salio mal', err);
      })
      console.log(proyecto);
      
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
    }
  initializeFormGroup() {
    this.form.setValue({
      id: "",
      nombre: "",
      descripcion: "",
      idUsuarioAlta: "",
      idUsuarioModificacion: "",
      estatus:""
  
    });
  }
}