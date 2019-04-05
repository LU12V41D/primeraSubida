import { ProyectoFase } from './../../models/proyectoFase';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ProjectsPostService } from '../../services/projectsPost.service';
import { Component, OnInit } from '@angular/core';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-proyecto-fase',
  templateUrl: './proyecto-fase.component.html',
  styleUrls: ['./proyecto-fase.component.css']
})
export class ProyectoFaseComponent implements OnInit {
  title='Registro Proyecto-Fase';
  form: FormGroup;
  @ BlockUI ('verified_proyectoFase') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private  servicio: ProjectsPostService) { 
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
    id: new FormControl(''),
    idProyecto:new FormControl('',[Validators.required]),
    nombre:new FormControl('',[Validators.required]),
    fechaCompromiso:new FormControl(new Date()),
    fechaTermino:new FormControl(''),
    orden:new FormControl(''),
    idUsuarioAlta: new FormControl(''),
    idUsuarioModificacion: new FormControl(''),
    estatus:new FormControl('',[Validators.required]),

    });

  }
  enviar(formValue:any){
    const proyectoFase: ProyectoFase=new ProyectoFase();
    proyectoFase.id = formValue.id,
    proyectoFase.idProyecto = formValue.idProyecto,
    proyectoFase.nombre = formValue.nombre,
    proyectoFase.fechaCompromiso = formValue.fechaCompromiso,
    proyectoFase.fechaTermino = formValue.fechaTermino,
    proyectoFase.orden = formValue.orden,
    proyectoFase.idUsuarioAlta = formValue.idUsuarioAlta,
    proyectoFase.idUsuarioModificacion = formValue.idUsuarioModificacion,
    proyectoFase.estatus = formValue.estatus,

    this.servicio.insertProyectoFase(proyectoFase).subscribe(
      res => {
        console.log(`ProyectoFase con id=${proyectoFase.id} registrado con exito`);
      },err => {
        console.log('Lo siento algo salio mal', err);
    })
    console.log(proyectoFase);
    
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
            title: `ProyectoFase ${this.form.value.id} Registrado con exito!!!`
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
    idProyecto:"",
    nombre:"",
    fechaCompromiso:"",
    fechaTermino:"",
    orden:"",
    idUsuarioAlta: "",
    idUsuarioModificacion: "",
    estatus:"",
  })
  }

}
