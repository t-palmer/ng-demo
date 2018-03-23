import {Component, Input} from '@angular/core';
// Remember to use ngModel you must import FormsModule
@Component({
    selector: 'my-input',
    template: `
        value: {{value}}
        <input [(ngModel)]="value"/>
    `,
})
export class MyInputComponent {
@Input() value: string;
}
