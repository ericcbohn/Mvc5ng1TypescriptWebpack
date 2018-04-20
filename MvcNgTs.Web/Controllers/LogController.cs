using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Elmah;

namespace MvcNgTs.Web.Controllers
{
    // api/log/
    public class LogController : ApiController
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
    
        [HttpPost]
        public void LogClientError([FromBody]string message)
        {
            ErrorSignal.FromCurrentContext().Raise(new WebClientException(message));
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
}
