using System.Web;
using System.Web.Mvc;

namespace MvcNgTs.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            // only handles 500 internal server errors
            // need <customErrors mode="On"> in web.config
            filters.Add(new HandleErrorAttribute());
        }
    }
}
