namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public interface ILogStrategy
    {
        void Execute(string message, string data);
    }
}