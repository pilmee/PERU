export class Person {
    private _name: string;
    private _age: string;
    private _nick: string;
    private _password: string;

    constructor(
        name: string,
        age: string,
        nick: string,
        password: string
    ) {
        this._name = name;
        this._age = age;
        this._nick = nick;
        this._password = password;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): string {
        return this._age;
    }

    set age(age: string) {
        this._age = age;
    }

    get nick(): string {
        return this._nick;
    }

    set nick(nick: string) {
        this._nick = nick;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }
}
