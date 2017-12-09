﻿import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { ResultService } from '../../Services/result.service';
import { RoutingService } from '../../Services/rooting.service';

import { AuthorizationModel } from '../../DTO/authorization';
import { AuthorizationRequests } from '../../DTO/Requests/authorization-request';
import { GameUpdateRequests } from '../../DTO/Requests/game-update-request';

import { AuthorizationResponse } from '../../DTO/Responses/authorization-response';

import { Observable } from 'rxjs/Rx';  

import * as $ from 'jquery';

@Component({
    selector: 'authorization',
    template: require('./authorization.html')
})

export class Authorization {
    authorizationModel: AuthorizationModel;
    games: Array<any>;
    userid: string;
    checkBox: boolean;

    constructor(private result: ResultService, private http: Http, private routing: RoutingService ) {
        this.authorizationModel = new AuthorizationModel();
        this.games = new Array();
    }

    public send() {
        debugger;
        this.result.Autorizetion(new AuthorizationRequests(this.authorizationModel.login, this.authorizationModel.password)).then(resp => {
            this.userid = resp.data.id;
            this.routing.userId = resp.data.id;
            debugger;

        })
    }

    public sendq(event) {
        debugger;
        this.result.UploadImg(event.target.files, "wqr").then(resp => {

        })
    }

    public updateGameStatus(id) {
        debugger;
        this.result.UpdateGameStatus(new GameUpdateRequests(this.userid, id, this.checkBox));
    }
}