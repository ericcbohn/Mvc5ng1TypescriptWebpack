using System;

namespace MvcNgTs.Web
{
    public class WebClientException : Exception
    {
        public WebClientException() { }

        public WebClientException(string message) : base(message) { }

        public WebClientException(string message, Exception inner) : base(message, inner ) { }
    }
}