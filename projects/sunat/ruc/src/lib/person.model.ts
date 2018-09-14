import { EPersonType } from './person-type.enum';

export class Person {
  private _person = null;

  public get natural(): boolean {
    return Person.isNatural(this._person);
  }
  public static isNatural(person: EPersonType): boolean {
    return person === EPersonType.NATURAL_PERSON;
  }

  public get legalPerson(): boolean {
    return Person.isLegalPerson(this._person);
  }
  public static isLegalPerson(person: EPersonType): boolean {
    return person === EPersonType.NATURAL_PERSON;
  }

  public get specialSocieties(): boolean {
    return Person.isSpecialSocieties(this._person);
  }
  public static isSpecialSocieties(person: EPersonType): boolean {
    return person === EPersonType.NATURAL_PERSON;
  }

  public get religiousInstitutions(): boolean {
    return Person.isReligiousInstitutions(this._person);
  }
  public static isReligiousInstitutions(person: EPersonType): boolean {
    return person === EPersonType.NATURAL_PERSON;
  }

  constructor(person: string) {
    this._person = person;
  }
}
