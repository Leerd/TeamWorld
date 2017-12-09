import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { ResultService } from '../../Services/result.service';
import { RoutingService } from '../../Services/rooting.service';

import { GameUpdateRequests } from '../../DTO/Requests/game-update-request';
import { GetAllGames } from '../../DTO/Requests/all-games-request';

import { Observable } from 'rxjs/Rx';  

import * as $ from 'jquery';

@Component({
    selector: 'user-games',
    template: require('./user-games.html')
})

export class UserGames implements OnInit {
    games: Array<any>;
    userid: string;
    checkBox: boolean;

    constructor(private result: ResultService, private http: Http, private routing: RoutingService) {
        this.games = new Array();
    }

    ngOnInit() {
        debugger;
        this.result.GetAllGames(new GetAllGames(this.routing.userId)).then(resp => {
            this.games = resp.data;
            debugger;
        })
    }

    updateGameStatus(id) {
        this.result.UpdateGameStatus(new GameUpdateRequests(this.routing.userId, id, this.checkBox));
    }
}