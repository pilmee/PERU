import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { RegisterPersonListPresenter } from './register-person.list.presenter';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-register-person-list',
    templateUrl: './register-person.list.component.html',
    providers: [
        RegisterPersonListPresenter
    ]
})
export class RegisterPersonListComponent implements OnInit, OnDestroy {

    @Input()
    persons: Person[];
    @Output()
    personEliminated = new EventEmitter<Person>();

    private presenterSubscription: Subscription = null;

    constructor(private presenter: RegisterPersonListPresenter) { }

    ngOnInit() {
        this.presenterSubscription = this.presenter.personEliminated$.subscribe((person) => {
            this.personEliminated.emit(person);
        });
    }

    ngOnDestroy() {
        if (this.presenterSubscription) {
            this.presenterSubscription.unsubscribe();
        }
    }

    remove(person: Person) {
        this.presenter.drop(person);
    }

}
