using System.Web.Mvc;

namespace MvcNgTs.Web.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Handle 404 errors
        /// </summary>
        public ActionResult NotFound()
        {
            return View();
        }

        /// <summary>
        /// Handle 403 & 401 errors
        /// </summary>
        public ActionResult Unauthorized()
        {
            return View();
        }
    }
}