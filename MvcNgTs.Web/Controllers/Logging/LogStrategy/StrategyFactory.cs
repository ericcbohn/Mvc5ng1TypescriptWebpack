using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcNgTs.Web.Controllers.Logging.LogStrategy
{
    public static class StrategyFactory// : ILogStrategyFactory
    {
        private static ILogStrategy Strategy { get; set; }

        public static void ExecuteLogStrategy<T>() where T : ILogStrategy
        {

        }
    }
}