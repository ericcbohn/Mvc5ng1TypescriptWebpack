using Ninject.Extensions.Logging;
using System.Web.Mvc;

namespace MvcNgTs.Web.Controllers
{
    // TODO: handle errors to api endpoints from AngularJS: https://stackoverflow.com/questions/21993758/asp-net-mvc-5-error-handling
    public class ErrorController : Controller
    {
        private ILogger _Logger { get; set; }

        public ErrorController(ILogger logger)
        {
            _Logger = logger;
        }

        public ActionResult Index()
        {
            //LogError();
            return View();
        }

        /// <summary>
        /// Log error
        /// </summary>
        private void LogError(string message)
        {
            _Logger.ErrorException(message, new AngularException(message));//err.Message, err);
        }
    }
}