import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HTTPService {

    constructor(private http: HttpClient) { }

    public httpGet(url: string, responseType: any): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = {
                headers : headers,
                withCredentials : true,
                responseType: responseType
            };
        return this.http.get(url, options);
    }


    public httpPost(url: string, data: any, responseType: any): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'text/plain; charset=utf-8; application/json');
        let options = {
                headers : headers,
                withCredentials : true,
                responseType: responseType
            };
        return this.http.post(url, data, options);
    }

}
