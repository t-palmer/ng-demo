import {Component, EventEmitter, Input, Output} from '@angular/core';
// Remember to use ngModel you must import FormsModule

// NOTICE: you must us (change) and NOT onchange
@Component({
    selector: 'my-two-way-input',
    template: `
        value: {{value}}
        <input [(ngModel)]="value" (change)="onChange()" (keyup)="onKeyup()"/>
    `,
})
export class MyTwoWayInputComponent {
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    onChange() {
        console.log('onChange');
        this.valueChange.emit(this.value);
    }

    onKeyup() {
        console.log('onKeyup');
        this.valueChange.emit(this.value);
    }
}
