import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import {  HttpClientModule } from '@angular/common/http';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      providers: [ MedicoService ],
      imports: [ HttpClientModule ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });


  it('Debe de retornar el nombre del médico', () => {
    
    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);

  });


});
