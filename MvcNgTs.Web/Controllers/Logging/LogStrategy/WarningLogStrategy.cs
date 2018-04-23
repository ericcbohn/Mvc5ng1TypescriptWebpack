using Ninject.Extensions.Logging;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public class WarningLogStrategy : AbstractLogStrategy
    {
        public WarningLogStrategy(ILogger logger) : base(logger) { }

        public override void Execute(string message, string data)
        {
            _logger.Warn(message);
        }
    }
}