import { Person } from './person.model';
import { RUC_LENGTH } from './ruc.constant';
import { IRUC } from './ruc.interface';

export class RUC {
  private _ruc: IRUC;
  public get value(): string {
    return `${this._ruc.person}${this._ruc.id}${this._ruc.verificator}`;
  }
  public get observableValue(): any {
    //TODO: Implementar retorno de subscripcion ".asObserver()" y actualizar propiedad value con return "this._ruc.getValue();"
    return this._ruc;
  }

  private _error: Error;
  public get error(): Error {
    return this._error;
  }

  private _person: Person;
  public get person(): Person {
    return this._person;
  }

  public get valid(): boolean {
    return true;
  }
  public get inValid(): boolean {
    return !this.valid;
  }
  public get quantityValid(): boolean {
    return String(this._ruc).length === RUC_LENGTH;
  }

  constructor(data: string | number) {
    try {
      this._ruc = RUC.parse(data);
      this._error = null;
      this._person = new Person(this._ruc.person);
    } catch (error) {
      this._error = error;
    }
  }

  public static validate(ruc: string | number): boolean {
    let _ruc_ = Number(ruc);
    let i;
    let suma = 0;

    if (!(_ruc_ >= 1e10 && _ruc_ < 11e9 || _ruc_ >= 15e9 && _ruc_ < 18e9 || _ruc_ >= 2e10 && _ruc_ < 21e9)) {
      return false;
    }

    for (suma = -(_ruc_ % 10 < 2), i = 0; i < RUC_LENGTH; i++, _ruc_ = _ruc_ / 10 || 0) {
        suma += (_ruc_ % 10) * (i % 7 + (i / 7 || 0) + 1);
    }
    return suma % 11 === 0;
  }
  
  public static parse(ruc: string | number): IRUC {
    try {
      const _ruc_ = String(ruc);
      
      if (RUC.validate(ruc)) {
        const person = _ruc_.substr(0, 2);
        const id = _ruc_.substr(2, 8);
        const verificator = _ruc_.substr(10, 10);

        return {
          person, id, verificator
        };
      }
      
      throw new Error('RUC incorrecto');
    } catch (error) {
      //TODO:
    }    
  }
}
