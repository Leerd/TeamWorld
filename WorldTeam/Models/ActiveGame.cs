using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorldTeam.Models
{
    public class ActiveGame
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public bool  Active { get; set; }

        public string Logo { get; set; }
    }
}