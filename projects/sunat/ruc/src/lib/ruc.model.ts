import { Person } from './person.model';
import { RUC_LENGTH } from './ruc.constant';

export class RUC {
  private _ruc: string;
  public get value(): string {
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
    if (RUC.validate(data)) {
      this._ruc = String(data);
      this._error = null;
      this._person = new Person(this._ruc);
    } else {
      this._ruc = null;
      this._error = new Error('RUC incorrecto.');
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
}
