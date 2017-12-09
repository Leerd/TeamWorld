import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RoutingService {

    userId: string;
    constructor(private http: Http) {
        this.userId = "";
    }


}