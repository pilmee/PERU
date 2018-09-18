import { AbstractControl } from '@angular/forms';
import { RUC } from '@sunat/ruc';

export function containsElevenDigits(control: AbstractControl) {
    const ruc = new RUC(control.value);
    console.log(ruc.error);
    if (!ruc.quantityValid) {
        return { containsElevenDigits: true };
    }
    return null;
}
