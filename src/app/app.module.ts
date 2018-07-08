import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './@material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormComponent} from './form/form.component';
import {RepeatTypeComponent} from './form/repeat-section.type';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        RepeatTypeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormlyModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
                types: [
                    {name: 'repeat', component: RepeatTypeComponent},
                ],
            }),
            FormlyMaterialModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
