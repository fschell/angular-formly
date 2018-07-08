import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './@material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormlyModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
