using System.Web.Http.Filters;
using System.Web.Mvc;

namespace MvcNgTs.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            // only handles 500 internal server errors
            // need <customErrors mode="On"> in web.config
            filters.Add(new ElmahMvcErrorAttribute());//HandleErrorAttribute());
        }

        public static void RegisterGlobalFilters(HttpFilterCollection filters)
        {
            filters.Add(new ElmahApiErrorAttribute());
        }
    }
}
