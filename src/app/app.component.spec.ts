import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
//import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        //NavbarComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
     
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoBase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoBase');
  });

  
  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });


 

});
