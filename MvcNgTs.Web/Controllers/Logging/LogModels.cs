﻿namespace MvcNgTs.Web.Controllers.Logging
{
    public sealed class LogModel
    {
        public string Message { get; set; }
        public string Data { get; set; }
        public LogType Type { get; set; }
    }

    public enum LogType { Error, Info, Success, Warning }
}