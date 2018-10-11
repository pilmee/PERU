import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPersonContainerComponent } from './register-person.container.component';
import { RegisterPersonFormComponent } from './form/register-person.form.component';
import { RegisterPersonListComponent } from './list/register-person.list.component';
import { PersonFakeHttp } from './register-person.fake-http.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RegisterPersonContainerComponent,
        RegisterPersonFormComponent,
        RegisterPersonListComponent
    ],
    exports: [
        RegisterPersonContainerComponent
    ],
    providers: [
        PersonFakeHttp
    ]
})
export class RegisterPersonModule { }
