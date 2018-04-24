namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public interface ILogStrategy
    {
        void Execute(LogModel log);
    }
}