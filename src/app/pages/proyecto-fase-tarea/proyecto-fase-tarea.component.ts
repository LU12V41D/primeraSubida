import { ProjectsPostService } from '../../services/projectsPost.service';
import { ProyectoFaseTarea } from './../../models/proyectoFaseTarea';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlockUI , NgBlockUI } from 'ng-block-ui';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-proyecto-fase-tarea',
  templateUrl: './proyecto-fase-tarea.component.html',
  styleUrls: ['./proyecto-fase-tarea.component.css']
})
export class ProyectoFaseTareaComponent implements OnInit {
  form:FormGroup;
  title='Registro Proyecto-Fase-Tarea';
  @ BlockUI ('verified_pft') blockUI : NgBlockUI;
  constructor(private formBuilder: FormBuilder, private servicio: ProjectsPostService) { 
    this.blockUI.start('Loading...'); 
  
    setTimeout(() => {
      this.blockUI.stop(); 
     
    }, 2000);
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
      id: new FormControl('',[Validators.required]),
      fase: new FormControl('',[Validators.required]),
      idTarea: new FormControl('',[Validators.required])
    });
  }
  enviar(formValue:any){
    const pft : ProyectoFaseTarea= new ProyectoFaseTarea();
    pft.id=formValue.id;
    pft.fase=formValue.fase
    pft.idTarea=formValue.idTarea;
    this.servicio.insertPFT(pft).subscribe(data =>{
      console.log(`ProyectoFaseTarea con id=${pft.id} registrado con exito`);
        },err => {
          console.log('Lo siento algo salio mal', err);
      })
      console.log(pft);
      
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
              title: `ProyectoFaseTarea ${this.form.value.id} Registrado con exito!!!`
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
      fase:"",
      idTarea:"",
    });
  }


}