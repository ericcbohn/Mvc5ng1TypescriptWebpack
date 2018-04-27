using MvcNgTs.Web.Controllers.Logging.LogStrategy;
using System.Web.Http;

// TODO: add authorization for viewing /elmah page
namespace MvcNgTs.Web.Controllers.Logging
{
    /// <summary>
    /// Api endpoint for logging errors from the client (error, info, debug, log).
    /// </summary>
    /// <remarks>The path: /api/log</remarks>
    public class LogController : ApiController
    {
        private readonly ILogStrategyFactory LogFactory;

        public LogController(ILogStrategyFactory logFactory)
        {
            LogFactory = logFactory;
        }
        
        /// <summary>
        /// Log message from client (error, info, debug, warning).
        /// </summary>
        /// <param name="log">Object containing log information</param>
        [HttpPost]
        public void LogMessage([FromBody]LogModel log)
        {
            LogFactory.GetStrategy(log.Type).Execute(log);
        }
    }

}
