import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutaTareasComponent } from './minuta-tareas.component';

describe('MinutaTareasComponent', () => {
  let component: MinutaTareasComponent;
  let fixture: ComponentFixture<MinutaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutaTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
