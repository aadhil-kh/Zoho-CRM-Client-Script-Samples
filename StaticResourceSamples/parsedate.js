function parseDate(str, format) {
    let symbols = {
      d: "day",
      m: "month",
      y: "year",
      h: "hour",
      i: "minute",
      s: "second",
      A: "ampm",
    };
    let strParts = str.split(/[^a-z0-9]/i);
    let formatParts = format.split(/[^a-z0-9]/i);
    if (strParts.length !== formatParts.length && strParts.length + 1 !== formatParts.length) {
      throw new Error("Invalid date format");
    }
    let dateValues = {};
    for (let i = 0; i < formatParts.length; i++) {
      let formatPart = formatParts[i];
      let symbol = symbols[formatPart[0]];
      if (!symbol) {
        throw new Error("Invalid date symbol");
      }
      let strPart = strParts[i];
      let value;
      if (symbol === "ampm") {
        value = strPart.toUpperCase();
        if (value !== "AM" && value !== "PM") {
          throw new Error("Invalid AM/PM value");
        }
      } else {
        value = parseInt(strPart, 10) || 0;
      }
      dateValues[symbol] = value;
    }
    let day = dateValues.day;
    let month = dateValues.month - 1;
    let year = dateValues.year;
    let hour = dateValues.hour || 0;
    let minute = dateValues.minute || 0;
    let second = dateValues.second || 0;
    let ampm = dateValues.ampm || "";
    if (ampm === "AM" && hour === 12) {
      hour = 0;
    } else if (ampm === "PM" && hour < 12) {
      hour += 12;
    }
    let date = new Date(year, month, day, hour, minute, second);
    if (
      date.getDate() !== day ||
      date.getMonth() !== month ||
      date.getFullYear() !== year ||
      date.getHours() !== hour ||
      date.getMinutes() !== minute ||
      date.getSeconds() !== second
    ) {
      throw new Error("Invalid date value");
    }
    return date;
}