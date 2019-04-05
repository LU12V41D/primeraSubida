import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoUsuarioComponent } from './proyecto-usuario.component';

describe('ProyectoUsuarioComponent', () => {
  let component: ProyectoUsuarioComponent;
  let fixture: ComponentFixture<ProyectoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
