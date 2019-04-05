import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsPostService } from '../../services/projectsPost.service';
import { Minuta } from '../../models/minuta';
import  Swal  from 'sweetalert2';
import { BlockUI , NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-minuta',
  templateUrl: './minuta.component.html',
  styleUrls: ['./minuta.component.css']
})
export class MinutaComponent implements OnInit {
  form: FormGroup;
  title='Registro Minuta';
  @ BlockUI ('verified_minuta') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private  servicio: ProjectsPostService) { 
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
      id:new FormControl(''),
      nombre:new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      idProyecto:new FormControl('',[Validators.required]),
      urlAudioSesion:new FormControl(''),
      fechaSesion:new FormControl('',[Validators.required]),
      idUsuarioAlta:new FormControl(''),
      idUsuarioModificacion:new FormControl(''),
      estatus:new FormControl('',[Validators.required])

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
            title: `Minuta ${this.form.value.id} Registrada con exito!!!`
          })
                this.enviar(this.form.value);
        }
        this.blockUI.stop();
      }, 2000);
    })
  }
  enviar(formValue:any){
    const minuta: Minuta=new Minuta();
    minuta.id= formValue.id,
    minuta.nombre = formValue.nombre,
    minuta.descripcion = formValue.descripcion,
    minuta.idProyecto = formValue.idProyecto,
    minuta.urlAudioSesion = formValue.urlAudioSesion,
    minuta.fechaSesion = formValue.fechaSesion,
    minuta.idUsuarioAlta = formValue.idUsuarioAlta,
    minuta.idUsuarioModificacion = formValue.idUsuarioModificacion,
    minuta.estatus = formValue.estatus,
    this.servicio.insertMinuta(minuta).subscribe(
      res => {
        console.log(`Minuta con id=${minuta.id} registrado con exito`);
      },err => {
        console.log('Lo siento algo salio mal', err);
    })
    
    console.log(minuta);
    
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
  id: '',
  nombre: '',
  descripcion: '',
  idProyecto:'',
  urlAudioSesion: "",
  fechaSesion:"",
  idUsuarioAlta:"",
  idUsuarioModificacion:"",
  estatus:"",
  })
  }

}
