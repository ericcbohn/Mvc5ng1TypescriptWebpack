using Ninject;
using Ninject.Web.Common;
using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace MvcNgTs.Web
{
    public class MvcApplication : NinjectHttpApplication
    {        
        protected override IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.LoadIfNotLoaded(AppDomain.CurrentDomain.GetAssemblies());
            return kernel;
        }

        protected override void OnApplicationStarted()
        {
            base.OnApplicationStarted();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            FilterConfig.RegisterGlobalFilters(GlobalConfiguration.Configuration.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            LoggingConfig.RegisterLogging();
        }
    }
}
