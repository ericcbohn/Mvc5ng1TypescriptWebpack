using Ninject.Extensions.Logging;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public abstract class AbstractLogStrategy : ILogStrategy
    {
        protected ILogger _logger { get; set; }

        public AbstractLogStrategy(ILogger logger)
        {
            _logger = logger;
        }

        public abstract void Execute(LogModel log);
    }
}