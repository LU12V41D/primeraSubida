import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoFaseTareaComponent } from './proyecto-fase-tarea.component';

describe('ProyectoFaseTareaComponent', () => {
  let component: ProyectoFaseTareaComponent;
  let fixture: ComponentFixture<ProyectoFaseTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoFaseTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoFaseTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
