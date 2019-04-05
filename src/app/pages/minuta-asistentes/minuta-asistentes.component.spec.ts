import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutaAsistentesComponent } from './minuta-asistentes.component';

describe('MinutaAsistentesComponent', () => {
  let component: MinutaAsistentesComponent;
  let fixture: ComponentFixture<MinutaAsistentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutaAsistentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutaAsistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
