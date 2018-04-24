using Elmah;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public class ErrorLogStrategy : ILogStrategy
    {
        public void Execute(LogModel log)
        {
            ErrorSignal.FromCurrentContext().Raise(new WebClientException(string.Format("{0}: {1}", log.Message, log.Data)));
        }
    }
}