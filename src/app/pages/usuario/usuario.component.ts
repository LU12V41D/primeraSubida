import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  hide=true;
  datos:any;
  constructor(private servicio: UsuarioService) {
    this.servicio.getUsuarios().subscribe(data=>{
      this.datos=data.resultado[0];
      console.log(
      this.datos
      );
    })
   }

  ngOnInit() {
  }

}
