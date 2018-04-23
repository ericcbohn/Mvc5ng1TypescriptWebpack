using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public interface ILogStrategyFactory
    {
        void ExecuteLogStrategy();
    }
}
