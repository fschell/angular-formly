import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./_form.component.scss']
})
export class FormComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    @Input() data;
    @Input() formDataObj;
    submittedData;

    constructor() {
    }

    ngOnInit() {
    }

}
