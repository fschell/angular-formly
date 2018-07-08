import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./_form.component.scss']
})
export class FormComponent implements OnInit {
    @Input() model;
    @Input() fields;
    @Input() options;
    @Output() action = new EventEmitter<any>();

    form: FormGroup = new FormGroup({});
    submittedData;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit($event) {
        this.submittedData = this.model;
        this.action.emit({event: $event, payload: this.submittedData});
    }
}
