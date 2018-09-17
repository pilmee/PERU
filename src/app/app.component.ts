import { Component } from '@angular/core';

import { RUC } from '@sunat/ruc';

@Component({
  selector: 'sunat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public valid = '';
  public ruc = '';

  public validate(): void {
    const ruc = new RUC(this.ruc);
    this.valid = ruc.quantityValid ? 'Ruc con 11 digitos' : 'Debe tener 11 digitos';
  }
}
