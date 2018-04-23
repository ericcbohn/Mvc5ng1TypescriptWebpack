using Elmah;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public class ErrorLogStrategy : ILogStrategy
    {
        public void Execute(string message, string data)
        {
            ErrorSignal.FromCurrentContext().Raise(new WebClientException(message, new System.Exception(data)));
        }
    }
}