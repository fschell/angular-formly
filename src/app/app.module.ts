import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './@material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {DynamicFormComponent} from './dynamic-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormlyModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
