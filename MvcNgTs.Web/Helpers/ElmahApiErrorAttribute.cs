using Elmah;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Filters;

namespace MvcNgTs.Web
{
    public class ElmahApiErrorAttribute : IExceptionFilter
    {
        public bool AllowMultiple { get { return true; } }

        public Task ExecuteExceptionFilterAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)
        {
            var statusCode = HttpStatusCode.InternalServerError; // 500 error
            var responseObject = new JObject();
            dynamic responseData = responseObject;
            var ex = actionExecutedContext.Exception;

            responseData.message = ex.Message;
            AddDiagnosticInformation(ex, responseObject);

            string jsonText = JsonConvert.SerializeObject(responseData, WebApiConfig.JsonSerializerSettings);
            var httpContent = new StringContent(jsonText, Encoding.UTF8);
            httpContent.Headers.ContentType =
                new System.Net.Http.Headers.MediaTypeHeaderValue("application/json")
                {
                    CharSet = "utf-8"
                };

            var httpResponse =
                new HttpResponseMessage
                {
                    StatusCode = statusCode,
                    Content = httpContent,
                };

            actionExecutedContext.Response = httpResponse;

            ErrorSignal.FromCurrentContext().Raise(actionExecutedContext.Exception);
            
            return Task.FromResult(false);
        }

        [Conditional("DEBUG")]
        private void AddDiagnosticInformation(Exception ex, JObject responseObject)
        {
            dynamic responseData = responseObject;
            var exLst = new List<Exception>();
            for (var x = ex; x != null; x = x.InnerException)
            {
                exLst.Add(x);
            }
            responseData.Exceptions = new JArray(
                exLst
                    .Select(
                        x =>
                        JObject.FromObject(
                            new
                            {
                                errorType = x.GetType().FullName,
                                message = x.Message,
                            }))
                    .ToList());
            responseData.StackTrace = ex.StackTrace;
        }
    }
}