import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { containsElevenDigits } from './validators/containsEleventDigits';

@Component({
  selector: 'sunat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public valid = '';
  public ruc = '';
  public rucForm = new FormGroup({
    rucControl: new FormControl(
      { value: '', disabled: false },
      {
        validators: [Validators.required, containsElevenDigits],
        updateOn: 'blur'
      })
  }, { updateOn: 'submit' });

  public sendForm(): void {
    console.log(this.rucForm);
  }

}
