import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./_app.component.scss']
})
export class AppComponent {
    title = 'app';
    person = {
        firstname: 'Juri',
        age: 32,
        gender: 'M'
    };

    personFields = <FormlyFieldConfig>[
        {
            key: 'firstname',
            type: 'input',
            templateOptions: {
                label: 'Firstname'
            },
            validators: {
                validation: Validators.required
            },
            validation: {
                messages: {
                    required: 'You need to provide a value'
                }
            }
        },
        {
            key: 'age',
            type: 'input',
            templateOptions: {
                label: 'Age',
                type: 'number'
            },
            validators: {
                validation: Validators.min(18)
            },
            validation: {
                messages: {
                    min: 'You need to specify a value greater or equal to 18'
                }
            }
        },
        {
            key: 'gender',
            type: 'radio',
            templateOptions: {
                label: 'Gender',
                options: [{value: 'Male', key: 'M'}, {value: 'Female', key: 'F'}]
            }
        }
    ];

    onAction() {

    }
}
