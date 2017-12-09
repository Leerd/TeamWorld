"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var result_service_1 = require("../../Services/result.service");
var rooting_service_1 = require("../../Services/rooting.service");
var game_update_request_1 = require("../../DTO/Requests/game-update-request");
var all_games_request_1 = require("../../DTO/Requests/all-games-request");
var UserGames = /** @class */ (function () {
    function UserGames(result, http, routing) {
        this.result = result;
        this.http = http;
        this.routing = routing;
        this.games = new Array();
    }
    UserGames.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.result.GetAllGames(new all_games_request_1.GetAllGames(this.routing.userId)).then(function (resp) {
            _this.games = resp.data;
            debugger;
        });
    };
    UserGames.prototype.updateGameStatus = function (id) {
        this.result.UpdateGameStatus(new game_update_request_1.GameUpdateRequests(this.routing.userId, id, this.checkBox));
    };
    UserGames = __decorate([
        core_1.Component({
            selector: 'user-games',
            template: require('./user-games.html')
        }),
        __metadata("design:paramtypes", [result_service_1.ResultService, http_1.Http, rooting_service_1.RoutingService])
    ], UserGames);
    return UserGames;
}());
exports.UserGames = UserGames;
//# sourceMappingURL=user-games.js.map