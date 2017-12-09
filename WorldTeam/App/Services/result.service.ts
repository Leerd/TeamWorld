import { Injectable } from '@angular/core';
import { TransportService } from '../Services/transport.service';

import { AuthorizationRequests } from '../DTO/Requests/authorization-request';
import { GameUpdateRequests } from '../DTO/Requests/game-update-request';
import { GetAllGames } from '../DTO/Requests/all-games-request';

import { AuthorizationResponse } from '../DTO/Responses/authorization-response';

@Injectable()
export class ResultService {
    constructor(private transport: TransportService) { }

    public Autorizetion(request: AuthorizationRequests){
        return this.transport.postData("api/Authorize/GetUser", request)
    }

    public UploadImg(eventFile: FileList, id: string) {
        return this.transport.postImg("/api/Authorize/Upload", eventFile, id)
    }

    public GetAllGames(request: GetAllGames) {
        return this.transport.postData("/api/Values/GetAllGames", request)
    }

    public UpdateGameStatus(request: GameUpdateRequests) {
        return this.transport.postData("/api/Values/UpateGameStatus", request)
    }
}