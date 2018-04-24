using Ninject.Extensions.Logging;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public class InfoLogStrategy : AbstractLogStrategy
    {
        public InfoLogStrategy(ILogger logger) : base(logger) { }

        public override void Execute(LogModel log)
        {
            _logger.Info(log.Message);
        }
    }
}