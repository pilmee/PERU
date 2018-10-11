import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterPersonModule } from './register-person/register-person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegisterPersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
