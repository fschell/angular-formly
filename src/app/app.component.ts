import {Component} from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./_app.component.scss']
})
export class AppComponent {
    title = 'app';
    model = {
        firstname: 'Juri',
        lastname: 'Kalashnikov',
        age: 32,
        gender: 'M'
    };
    options: FormlyFormOptions = {};
    fields = <FormlyFieldConfig>[
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
            key: 'lastname',
            type: 'input',
            templateOptions: {
                label: 'Lastname'
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
        },
        {
            key: 'investments',
            type: 'repeat',
            fieldArray: {
                fieldGroupClassName: 'row',
                templateOptions: {
                    btnText: 'Add another investment',
                },
                fieldGroup: [
                    {
                        className: 'col-sm-4',
                        type: 'input',
                        key: 'investmentName',
                        templateOptions: {
                            label: 'Name of Investment:',
                            required: true,
                        },
                    },
                    {
                        type: 'input',
                        key: 'investmentDate',
                        className: 'col-sm-3',
                        templateOptions: {
                            type: 'date',
                            label: 'Date of Investment:',
                        },
                    },
                    {
                        type: 'input',
                        key: 'stockIdentifier',
                        className: 'col-sm-3',
                        templateOptions: {
                            label: 'Stock Identifier:',
                            addonRight: {
                                class: 'fa fa-code',
                                onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),
                            },
                        },
                    },
                ],
            },
        },
    ];



onAction($event) {
    console.log($event);

}
}
