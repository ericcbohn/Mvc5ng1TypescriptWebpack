using System;
using System.Reflection;

namespace MvcNgTs.Web
{
    public class LoggingConfig
    {
        /// <summary>
        /// Configure Log4Net logging
        /// </summary>
        public static void RegisterLogging()
        {
            var logName = string.Format("{0}-{1}.log", DateTime.UtcNow.ToYrMoDayStr(), Assembly.GetExecutingAssembly().GetName().Name);
            // http://logging.apache.org/log4net/release/manual/contexts.html
            log4net.GlobalContext.Properties["LogName"] = logName;
            log4net.Config.XmlConfigurator.Configure();
        }
    }
}