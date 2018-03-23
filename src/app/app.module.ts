import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageBindingComponent } from './page-binding.component';
import { PageThisComponent } from './page-this.component';
import { PageObservablesComponent } from './page-observables.component';
import { MyInputComponent } from './my-input.component';
import { MyTwoWayInputComponent } from './my-two-way-input.component';
import { HTTPService } from './http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        PageObservablesComponent,
        PageThisComponent,
        PageBindingComponent,
        MyInputComponent,
        MyTwoWayInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: 'binding',
                component: PageBindingComponent
            },
            {
                path: 'this',
                component: PageThisComponent
            },
            {
                path: 'observables',
                component: PageObservablesComponent
            }
        ]),
        NgbModule.forRoot()
    ],
    providers: [
        HTTPService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
