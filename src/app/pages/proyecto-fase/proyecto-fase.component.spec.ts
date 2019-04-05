import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoFaseComponent } from './proyecto-fase.component';

describe('ProyectoFaseComponent', () => {
  let component: ProyectoFaseComponent;
  let fixture: ComponentFixture<ProyectoFaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoFaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
