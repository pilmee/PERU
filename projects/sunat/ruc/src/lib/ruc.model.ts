import { Injectable } from '@angular/core';

@Injectable()
export class Ruc {

    constructor(private number: string) {
    }

    // TODO: método que validará si el número de ruc es correcto.
    isValid(): boolean {

        return false;
    }

    isQuantityValid(): boolean {
        const totalOfDigitsValid = 11;
        return this.number.length === totalOfDigitsValid;
    }

    // TODO: Este metodo deberá indicar el tipo de persona basado en los dos primeros digitos del ruc.
    typePerson(): string {

        const personIdentifier = this.number.substring(0, 2);

        switch (personIdentifier) {
            case ETypePerson.LEGAL_PERSON:
                return '';

            default:
                return '';
        }

    }

}

enum ETypePerson {
    NATURAL_PERSON = '10',
    LEGAL_PERSON = '20',
    ESPECIAL_SOCIETIES = '15',
    RELIGIOUS_INSTITUTIONS = '16',
    YEARS_BETWEEN_1993_AND_2000 = '17'
}

interface Result {
    error: boolean;
    message: string;
}
