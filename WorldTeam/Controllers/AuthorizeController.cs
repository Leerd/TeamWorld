using System.Net.Http;
using System.Web;
using System.Web.Http;
using WorldTeam.Assets;
using WorldTeam.Models;
using WorldTeam.Models.Responses;

namespace WebApplication1.Controllers
{
    public class AuthorizeController : ApiController
    {
        [HttpPost]
        public AuthorizationResponse GetUser(AuthorizationRequest request)
        {
            return new AuthorizationResponse(new SQLHelper().GetUser(request.Login, request.Password));
        }

        [HttpPost]
        public HttpResponseMessage Upload()
        {
            return new FileManag().Upload();
        }
    }
}
