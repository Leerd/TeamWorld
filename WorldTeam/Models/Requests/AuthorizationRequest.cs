﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorldTeam.Models
{
    public class AuthorizationRequest
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}