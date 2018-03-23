import { Component } from '@angular/core';

@Component({
    selector: 'page-binding',
    templateUrl: './page-binding.component.html',
})
export class PageBindingComponent {
    public myVar = 'VALUE';
    public myOwnVar = 'Another VALUE';
}
