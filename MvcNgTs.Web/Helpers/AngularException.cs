using System;

namespace MvcNgTs.Web
{
    public class AngularException : Exception
    {
        public AngularException() { }

        public AngularException(string message) : base(message) { }

        public AngularException(string message, Exception inner) : base(message, inner ) { }
    }
}