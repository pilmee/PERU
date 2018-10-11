import { Subject, Observable } from 'rxjs';
import { Person } from './person';

export class PersonFakeHttp {

    private persons: Person[] = [];
    private personsSubject = new Subject<Person[]>();
    persons$: Observable<Person[]> = this.personsSubject.asObservable();

    add(person: Person) {
        this.persons.push(person);
        this.personsSubject.next(this.persons);
    }

    getAll(): Person[] {
        return this.persons;
    }

}
