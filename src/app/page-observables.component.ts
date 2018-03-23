import { Component } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { HTTPService } from './http.service';

@Component({
    selector: 'page-observables',
    templateUrl: './page-observables.component.html',
})
export class PageObservablesComponent {
    public myObservable: Observable<any>;
    public resultJson = {};

    public multiValueResult: string = '';
    public multiValue() {
        let observable = Rx.Observable.create(function (observer: Observer<any>) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });

        observable.subscribe({
            next: (x: any) => console.log('got value', x),
            error: (err: any) => console.error('something wrong occurred:', err),
            complete: () => console.log('complete'),
        });
    }

    private getItemsObject(): Observable<any> {
        console.log('getItemsObject()');
        let url = 'items.json';
        return this.httpService
            .httpGet(url, 'json');
    }

    public httpGetObservable() {
        this.myObservable = this.getItemsObject();
    }
    public httpSubscribe() {
        this.myObservable
            .subscribe(
                result => this.resultJson = result
            );
    }


    public httpGet() {
        this.getItemsObject()
            .subscribe(
                result => this.resultJson = result
            );
    }

    public httpGetElement() {
        this.getItemsObject()
            .map(itemsObject => itemsObject.items)
            .subscribe(
                result => this.resultJson = result
            );
    }

    public httpGetArray() {
        let count = 0;
        this.getItemsObject()
            .map(itemsObject => itemsObject.items)
            .subscribe(
                result => this.resultJson =
                    result.map(
                        (item: any) => {
                            let newItem: { name: string, number: number } = {
                                name: item,
                                number: count++
                            };
                            newItem.name = item;
                            return newItem;
                        })
            );
    }



    constructor(
        private httpService: HTTPService
    ) {}

}
