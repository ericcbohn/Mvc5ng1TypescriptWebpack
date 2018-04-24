using Ninject.Extensions.Logging;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public class DebugLogStrategy : AbstractLogStrategy
    {
        public DebugLogStrategy(ILogger logger) : base(logger) { }

        public override void Execute(LogModel log)
        {
            _logger.Debug(log.Message);
        }
    }
}