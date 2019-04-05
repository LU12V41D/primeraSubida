import { MinutaAsistentes } from './../../models/minutaAsistentes';
import { ProjectsPostService } from './../../services/projectsPost.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-minuta-asistentes',
  templateUrl: './minuta-asistentes.component.html',
  styleUrls: ['./minuta-asistentes.component.css']
})
export class MinutaAsistentesComponent implements OnInit {
  form: FormGroup;
  title='Registro Minuta-Asistentes';
  @ BlockUI ('verified_miA') blockUI : NgBlockUI;
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
      idUsuarioAsistente: new FormControl(''),
      aprobacion: new FormControl('',[Validators.required]),
      fechaAprobacion: new FormControl(new Date(),[Validators.required])
    });

  }
  enviar(formValue: any){
    const minutaAsis : MinutaAsistentes= new MinutaAsistentes();
    minutaAsis.id=formValue.id,
    minutaAsis.idMinuta=formValue.idMinuta,
    minutaAsis.idUsuarioAsistente=formValue.idUsuarioAsistente,
    minutaAsis.aprobacion=formValue.aprobacion,
    minutaAsis.fechaAprobacion=formValue.fechaAprobacion,
    this.servicio.insertMinutaAsistentes(minutaAsis).subscribe(
      res => {
        console.log(`MinutaAsistentes con id=${minutaAsis.id} registrado con exito`);
      },err => {
        console.log('Lo siento algo salio mal', err);
    })
    console.log(minutaAsis);
    
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
            title: `MinutaAsistentes =${this.form.value.id} Registrado con exito!!!`
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
      idMinuta:"",
      idUsuarioAsistente:"",
      aprobacion:"",
      fechaAprobacion:"",
    });
  }

    

}
