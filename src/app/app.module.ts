import { ProjectsPostService } from './services/projectsPost.service';
import { ProjectsGetService } from './services/projectsGet.service';

import { UsuarioService } from './services/usuario.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';

import { TaskComponent } from './pages/task/task.component';
import { ProjectComponent } from './pages/project/project.component';

import { PerfilComponent } from './pages/perfil/perfil.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { RegistrarComponent } from './pages/usuario/registrar/registrar.component';
import { MinutaComponent } from './pages/minuta/minuta.component';
import { ProyectoFaseTareaComponent } from './pages/proyecto-fase-tarea/proyecto-fase-tarea.component';
import { MinutaAsistentesComponent } from './pages/minuta-asistentes/minuta-asistentes.component';
import { MinutaTareasComponent } from './pages/minuta-tareas/minuta-tareas.component';
import { ProyectoFaseComponent } from './pages/proyecto-fase/proyecto-fase.component';
import { ProyectoUsuarioComponent } from './pages/proyecto-usuario/proyecto-usuario.component';
import { TareaDocumentosComponent } from './pages/tarea-documentos/tarea-documentos.component';
import { TareaRelacionComponent } from './pages/tarea-relacion/tarea-relacion.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UserComponent } from './pages/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    TaskComponent,
    ProjectComponent,
    PerfilComponent,
    HomeComponent,
    UsuarioComponent,
    RegistrarComponent,
    MinutaComponent,
    ProyectoFaseTareaComponent,
    MinutaAsistentesComponent,
    MinutaTareasComponent,
    ProyectoFaseComponent,
    ProyectoUsuarioComponent,
    TareaDocumentosComponent,
    TareaRelacionComponent,
    UserComponent,
    
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    BlockUIModule.forRoot(
      
    ),
    MatNativeDateModule,
    MatButtonToggleModule
 
  ],
  providers: [ProjectsPostService,ProjectsGetService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
