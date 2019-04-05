import { ProjectsPostService } from './../../services/projectsPost.service';
import { TareaRelacion } from './../../models/tareaRelacion';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';



@Component({
  selector: 'app-tarea-relacion',
  templateUrl: './tarea-relacion.component.html',
  styleUrls: ['./tarea-relacion.component.css']
})
export class TareaRelacionComponent implements OnInit {

  title='Registro Tarea-Relacion';
  form: FormGroup;
  @ BlockUI ('verified_tareaRela') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private servicio: ProjectsPostService) { 
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
      id: new FormControl(''),
      idTarea: new FormControl('',[Validators.required]),
      idSubTarea: new FormControl('',[Validators.required]),
     

    });
  }
  enviar(formValue: any){
      const tareaRela: TareaRelacion = new TareaRelacion();
       tareaRela.idTareaRelacion= formValue.id,
       tareaRela.idTarea= formValue.idTarea,
       tareaRela.idSubTarea= formValue.idSubTarea,
       this.servicio.insertTareaRelacion(tareaRela).subscribe(
        res => {
          console.log(`TareaRelacion con id=${tareaRela.idTareaRelacion} registrado con exito`);
        },err => {
          console.log('Lo siento algo salio mal', err);
      })
      console.log(tareaRela);
      
    
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
            title: `TareaRelacion ${this.form.value.id} registrado con exito!!!`
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
      id: "",
      idTarea: "",
      idSubTarea: "",
    });
  }
  
  
  }
  