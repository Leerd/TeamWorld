using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;
using WorldTeam.Assets;
using WorldTeam.Models;
using WorldTeam.Models.Requests;
using WorldTeam.Models.Responses;

public class ValuesController : ApiController
{

    [HttpPost]
    public GetAllGamesResponse GetAllGames(GetAllGames request)
    {
        return new GetAllGamesResponse(new SQLHelper().GetAllGames(request.UserId));
    }

    [HttpPost]
    public void UpateGameStatus(GameUpdateRequests request)
    {
        new SQLHelper().UpateGameStatus(request.UserId, request.GameId);
    }
}