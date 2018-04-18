using System;

namespace MvcNgTs.Web
{
    public static class ExtensionsForDateTime
    {
        /// <summary>
        /// i.e. "2018.4.2" for April 2, 2018
        /// </summary>
        /// <param name="date">Date to convert for formatted string.</param>
        /// <remarks>This is useful for creating files named in a sort-friendly format.</remarks>
        public static string ToYrMoDayStr(this DateTime date)
        {
            return string.Format("{0}.{1}.{2}", DateTime.UtcNow.Year, DateTime.UtcNow.Month, DateTime.UtcNow.Day);
        }
    }
}