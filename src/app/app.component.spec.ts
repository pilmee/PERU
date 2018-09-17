import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  // TODO: el test arroja error.
  it('Debe retornar "Debe tener 11 digitos"', () => {
    component.ruc = '123';
    component.validate();

    expect(component.valid).toContain('Debe tener 11 digitos');
  });

});
