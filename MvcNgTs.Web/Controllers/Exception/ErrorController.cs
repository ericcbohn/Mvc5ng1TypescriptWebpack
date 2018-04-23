using System.Web.Mvc;

namespace MvcNgTs.Web.Controllers.Exception
{
    public class ErrorController : Controller
    {
        /// <summary>
        /// Default error handler
        /// </summary>
        /// <remarks>"There was an error."</remarks>
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Handle 404 errors
        /// </summary>
        /// <remarks>"The page you were looking for was not found."</remarks>
        public ActionResult NotFound()
        {
            return View();
        }

        /// <summary>
        /// Handle 403 & 401 errors
        /// </summary>
        /// <remarks>"Unauthorized"</remarks>
        public ActionResult Unauthorized()
        {
            return View();
        }
    }
}