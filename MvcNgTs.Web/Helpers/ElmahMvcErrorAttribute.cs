using Elmah;
using System.Web.Mvc;

namespace MvcNgTs.Web
{
    // TODO: test that errors are logged to elmah and user friendly page displayed using customError attribute in web.config
    public class ElmahMvcErrorAttribute : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext filterContext)
        {
            base.OnException(filterContext);
            if (!filterContext.ExceptionHandled) return;
            ErrorSignal.FromCurrentContext().Raise(filterContext.Exception);
        }
    }
}