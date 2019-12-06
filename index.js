/*!
 * accepts
 * Copyright(c) 2019 kingsinsd
 * MIT Licensed
 */

'use strict'

/**
 * 千分位符号 Thousandths
 * @param{num}
 * @return{String}
 */
function convert(num) {
  return (num + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
}

/**
 * Filter 日期格式化
 * @param{dateStr, formatType}
 * @returns yyyy-MM-dd; yyyy/MM/dd; yyyy-MM-dd hh:mm:ss; hh:mm:ss
 */
function dateFormat(dateStr, fromatType) {
  var date = new Date(dateStr);
  var year = date.getFullYear();
  var month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (fromatType && fromatType.toLowerCase() === "yyyy-mm-dd") {
    return `${year}-${month}-${day}`;
  } else if (fromatType && fromatType.toLowerCase() === "yyyy/mm/dd") {
    return `${year}/${month}/${day}`;
  } else if (fromatType && fromatType.toLowerCase() === "hh:mm:ss") {
    return `${hh}:${mm}:${ss}`;
  } else {
    return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
  }
}
module.exports = { convert,dateFormat };
