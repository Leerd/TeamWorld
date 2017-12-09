"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var authorization_1 = require("./Components/authorization/authorization");
var user_games_1 = require("./Components/user-games/user-games");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var rooting_service_1 = require("../App/Services/rooting.service");
var result_service_1 = require("../App/Services/result.service");
var transport_service_1 = require("../App/Services/transport.service");
var appRoutes = [
    { path: '', component: authorization_1.Authorization },
    { path: 'games', component: user_games_1.UserGames }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [authorization_1.Authorization, user_games_1.UserGames],
            providers: [result_service_1.ResultService, transport_service_1.TransportService, rooting_service_1.RoutingService],
            bootstrap: [authorization_1.Authorization]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map