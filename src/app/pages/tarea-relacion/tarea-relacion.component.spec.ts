import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaRelacionComponent } from './tarea-relacion.component';

describe('TareaRelacionComponent', () => {
  let component: TareaRelacionComponent;
  let fixture: ComponentFixture<TareaRelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaRelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
