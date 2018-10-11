import { Person } from '../person';
import { Subject, Observable } from 'rxjs';

export class RegisterPersonListPresenter {

    private personEliminatedSubject = new Subject<Person>();
    personEliminated$: Observable<Person> = this.personEliminatedSubject.asObservable();

    drop(person: Person) {
        if (Number(person.age) > 50) {
            this.personEliminatedSubject.next(person);
        }
    }

}
