import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Authorization } from './Components/authorization/authorization'
import { UserGames } from './Components/user-games/user-games'
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RoutingService } from '../App/Services/rooting.service';

import { ResultService } from '../App/Services/result.service';
import { TransportService } from '../App/Services/transport.service'; 

const appRoutes: Routes = [
    { path: '', component: Authorization },
    { path: 'games', component: UserGames }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [Authorization, UserGames],
    providers: [ResultService, TransportService, RoutingService],
    bootstrap: [Authorization]
})

export class AppModule { }