using MvcNgTs.Web.Controllers.Logging.LogStrategy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MvcNgTs.Web.Controllers.Logging
{
    // api/log/
    public class LogController : ApiController
    {
        private readonly ILogStrategyFactory LogFactory;

        public LogController(ILogStrategyFactory logFactory)
        {
            LogFactory = logFactory;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
    
        /// <summary>
        /// Log message from client (error, info, debug, warning).
        /// </summary>
        /// <param name="log">Object containing log information</param>
        [HttpPost]
        public void LogMessage([FromBody]LogModel log)
        {
            LogFactory.GetStrategy(log.Type).Execute(log);
        }

        // TODO: remove once done testing and developing
        [HttpPut]
        public void Throw(string test)
        {
            Int16.Parse(test);
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }
    }

    public class WeatherForecast
    {
        public string DateFormatted { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }

        public int TemperatureF
        {
            get
            {
                return 32 + (int)(TemperatureC / 0.5556);
            }
        }
    }

}
