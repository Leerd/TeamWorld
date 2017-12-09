using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorldTeam.Models.Responses
{
    public class GetAllGamesResponse
    {
        public List<Games> Data { get; set; }

        public GetAllGamesResponse(List<Games> data)
        {
            Data = data;
        }
    }
}