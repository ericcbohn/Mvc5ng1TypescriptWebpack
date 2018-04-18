using Ninject;
using Ninject.Extensions.Logging;
using Ninject.Web.Common;
using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace MvcNgTs.Web
{
    public class MvcApplication : NinjectHttpApplication
    {
        private static ILoggerFactory _LoggerFactory { get; set; }

        /// <summary>
        /// Global exception handler for all errors and status codes.
        /// </summary>
        protected void Application_Error()
        {
            var ex = Server.GetLastError();
            var logger = _LoggerFactory.GetCurrentClassLogger();
            logger.ErrorException(ex.ToString(), ex);
        }

        protected override IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.LoadIfNotLoaded(AppDomain.CurrentDomain.GetAssemblies());

            _LoggerFactory = kernel.Get<ILoggerFactory>();

            return kernel;
        }

        protected override void OnApplicationStarted()
        {
            base.OnApplicationStarted();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            LoggingConfig.RegisterLogging();
        }
    }
}
