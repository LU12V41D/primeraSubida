import { TareaRelacionComponent } from './pages/tarea-relacion/tarea-relacion.component';
import { ProyectoUsuarioComponent } from './pages/proyecto-usuario/proyecto-usuario.component';

import { MinutaTareasComponent } from './pages/minuta-tareas/minuta-tareas.component';
import { MinutaAsistentesComponent } from './pages/minuta-asistentes/minuta-asistentes.component';
import { ProyectoFaseTareaComponent } from './pages/proyecto-fase-tarea/proyecto-fase-tarea.component';
import { MinutaComponent } from './pages/minuta/minuta.component';
import { RegistrarComponent } from './pages/usuario/registrar/registrar.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { TaskComponent } from './pages/task/task.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProyectoFaseComponent } from './pages/proyecto-fase/proyecto-fase.component';
import { TareaDocumentosComponent } from './pages/tarea-documentos/tarea-documentos.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proyect', component: ProjectComponent },
  {path: 'minuta', component: MinutaComponent},
  {path: 'minutaAsis', component: MinutaAsistentesComponent},
  {path: 'minutaTareas', component: MinutaTareasComponent},
  {path: 'proyectoFase', component: ProyectoFaseComponent},
  {path: 'proyectoUsuario', component: ProyectoUsuarioComponent},
  {path: 'tareaDocument', component: TareaDocumentosComponent},
  {path: 'tareaRelacion', component: TareaRelacionComponent},
  {path: 'pft', component: ProyectoFaseTareaComponent},
  { path: 'task', component: TaskComponent },
  {path: 'user', component: UsuarioComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'registro', component: RegistrarComponent},
  {path: 'perfil', component: PerfilComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
