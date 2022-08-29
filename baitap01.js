/**
 * Input: nhập ngày, tháng, năm
 *
 * Process:
 * 1. Lấy giá trị ngày tháng năm vừa nhập
 * 2. Kiểm tra năm nhuận => năm chia cho 4 không dư thì là năm nhuận (tháng 2 có 29 ngày), ngược lại thì là năm không nhuận (tháng 2 có 28 ngày)
 *
 * Output: tính ngày, tháng, năm của ngày tiếp theo và ngày trước đó
 */

var day = 28;
var month = 2;
var year = 2020;
var nextDay;
var nextMonth;
var nextYear;
var previousDay;
var previousMonth;
var previousYear;
var dayOfMonth;

switch (month) {
  case 1:
    dayOfMonth = 31;
    break;

  case 2:
    dayOfMonth = 28;
    break;

  case 3:
    dayOfMonth = 31;
    break;

  case 4:
    dayOfMonth = 30;
    break;

  case 5:
    dayOfMonth = 31;
    break;

  case 6:
    dayOfMonth = 30;
    break;

  case 7:
    dayOfMonth = 31;
    break;

  case 8:
    dayOfMonth = 31;
    break;

  case 9:
    dayOfMonth = 30;
    break;

  case 10:
    dayOfMonth = 31;
    break;

  case 11:
    dayOfMonth = 30;
    break;

  case 12:
    dayOfMonth = 31;
    break;

  default:
    break;
}

// Ngày, tháng, năm của ngày tiếp theo
if (month === 2) {
  if (year % 4 === 0 && day === dayOfMonth + 1) {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
  } else if (year % 4 !== 0 && day === dayOfMonth) {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
  } else {
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
  }
} else if (month === 12 && day === dayOfMonth) {
  nextDay = 1;
  nextMonth = 1;
  nextYear = year + 1;
} else if (month !== 12 && day === dayOfMonth) {
  nextDay = 1;
  nextMonth = month + 1;
  nextYear = year;
} else {
  nextDay = day + 1;
  nextMonth = month;
  nextYear = year;
}

// Ngày, tháng, năm của ngày trước đó
if (day === 1 && month === 1) {
  previousDay = 31;
  previousMonth = 12;
  previousYear = year - 1;
} else if (month === 3 && day === 1) {
  if (year % 4 === 0) {
    previousDay = 29;
  } else {
    previousDay = 28;
  }
  previousMonth = month - 1;
  previousYear = year;
} else if (month !== 1 && day === 1) {
  if (
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 9 ||
    month === 11
  ) {
    previousDay = 31;
  } else {
    previousDay = 30;
  }
  previousMonth = month - 1;
  previousYear = year;
} else {
  previousDay = day - 1;
  previousMonth = month;
  previousYear = year;
}

console.log("Ngày tiếp theo là:", nextDay, "/", nextMonth, "/", nextYear);
console.log(
  "Ngày trước đó là:",
  previousDay,
  "/",
  previousMonth,
  "/",
  previousYear
);
