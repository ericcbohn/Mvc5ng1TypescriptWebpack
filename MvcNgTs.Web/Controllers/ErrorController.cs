using System.Web.Mvc;

namespace MvcNgTs.Web.Controllers
{
    // TODO: handle errors to api endpoints from AngularJS: https://stackoverflow.com/questions/21993758/asp-net-mvc-5-error-handling
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
        /// Handle 403 errors
        /// </summary>
        public ActionResult BadRequest()
        {
            return View();
        }
    }
}