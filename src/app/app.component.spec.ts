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
    component.numberRuc = '123';
    const result = component.isQuantityValid();

    expect(result).toContain('Debe tener 11 digitos');
  });

});
