import { Component } from '@angular/core';

@Component({
    selector: 'page-this',
    templateUrl: './page-this.component.html',
})
export class PageThisComponent {

    public thisTestValue: string = 'COMPONENT';

    public callMe(callback: any) {
        callback('Some value');
    }

    public thisTest() {
        let self = this;
        function myLocalFunction(value: string) {
            // It is fine to use functions like this but be careful about "this"
            console.log('"this" is not the "this" of the Component');
            console.log('self works!', self.thisTestValue);
            console.log('this fails', this.thisTestValue);

        }

        this.callMe(myLocalFunction);
    }

    public thisParameterTest() {
        let self = this;
        this.callMe(
            function (value: string) {
                // It is fine to use functions like this but be careful about "this"
                console.log('"this" is not the "this" of the Component');
                console.log('self works!', self.thisTestValue);
                console.log('this fails', this.thisTestValue);
            }
        );
    }

    public thisArrowTest() {
        this.callMe((x: any) => console.log('this "this" works', this.thisTestValue));
    }


}
