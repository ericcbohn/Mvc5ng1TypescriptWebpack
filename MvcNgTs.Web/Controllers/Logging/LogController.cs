using Ninject.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MvcNgTs.Web.Controllers.Logging
{
    // api/log/
    public class LogController : ApiController
    {
        private readonly ILogger _logger;

        public LogController(ILogger log)
        {
            _logger = log;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
    
        [HttpPost]
        public void LogMessage([FromBody]LogModel log) // TODO: [FromBody]LogModel log)
        {
            _logger.Info(log.Message + " " + log.Data + " " + log.Source + " " + log.Type);
            //StrategyFactory.ExcecuteStrategy();
            // TODO: strategy pattern that logs to Elmah for errors, and log4net for all other
        }

        // TODO: remove once done testing and developing
        [HttpPut]
        public void Throw(string test)
        {
            _logger.Error("test log4net");
            //Int16.Parse(test);
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
