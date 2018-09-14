import { Component } from '@angular/core';

import { Ruc } from '@sunat/ruc';

@Component({
  selector: 'sunat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rucValid = '';
  numberRuc = '';

  isQuantityValid(): void {
    const ruc = new Ruc(this.numberRuc);
    this.rucValid = ruc.isQuantityValid() ? 'Ruc con 11 digitos' : 'Debe tener 11 digitos';
  }

}
