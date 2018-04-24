using Ninject.Extensions.Logging;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public class WarningLogStrategy : AbstractLogStrategy
    {
        public WarningLogStrategy(ILogger logger) : base(logger) { }

        public override void Execute(LogModel log)
        {
            _logger.Warn(log.Message);
        }
    }
}