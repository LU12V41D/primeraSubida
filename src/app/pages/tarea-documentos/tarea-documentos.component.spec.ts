import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDocumentosComponent } from './tarea-documentos.component';

describe('TareaDocumentosComponent', () => {
  let component: TareaDocumentosComponent;
  let fixture: ComponentFixture<TareaDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
