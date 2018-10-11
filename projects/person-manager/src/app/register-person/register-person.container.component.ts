import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './person';
import { PersonFakeHttp } from './register-person.fake-http.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-register-person-container',
    templateUrl: './register-person.container.component.html'
})
export class RegisterPersonContainerComponent implements OnInit, OnDestroy {

    private personsSubscription: Subscription = null;
    persons: Person[] = [];

    constructor(private personFakeHttp: PersonFakeHttp) { }

    ngOnInit() {
        this.personsSubscription = this.personFakeHttp.persons$.subscribe((persons) => {
            this.persons = persons;
        });
        this.loadPersons();
    }

    ngOnDestroy() {
        if (this.personsSubscription) {
            this.personsSubscription.unsubscribe();
        }
    }

    loadPersons() {
        this.personFakeHttp.add(new Person('alvaro', '99', 'sapomemey', 'Peru123.'));
        this.personFakeHttp.add(new Person('Ivan', '1', 'pilme', 'Peru123.'));
        this.personFakeHttp.add(new Person('Morfeo', '12', 'calcuchimac', 'Peru123.'));
        this.personFakeHttp.add(new Person('Toledo', '66', 'rata', 'Peru123.'));
    }

    removePerson(person: Person) {
        console.log('persona a eliminar', person);
    }

}
