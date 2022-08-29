/**
 * Input: nhập ngày, tháng, năm
 *
 * Process:
 * 1. Lấy giá trị ngày tháng năm vừa nhập, tạo các biến day, month, year, nextDay, nextMonth, nextYear, previousDay, previousMonth, previousYear, dayOfMonth
 * 2. Lấy giá trị ngày trong tháng; tháng 1, tháng 3, tháng 5, tháng 7, tháng 8, tháng 10, tháng 12 có 31 ngày (dayOfMonth = 31)
 *                                  tháng 3, tháng 6, tháng 9, tháng 11 có 30 ngày (dayOfMonth = 30)
 *                                  tháng 2 năm nhuận có 29 ngày (dayOfMonth = 29), tháng 2 năm không nhuận có 28 ngày (dayOfMonth = 28)
 *
 * 3. Tính ngày, tháng, năm của ngày tiếp theo:
 * 3.1 Nếu là tháng 2 năm nhuận và có ngày là ngày 29 cuối tháng thì ngày tiếp theo sẽ là ngày 1/3/year
 * 3.2 Nếu là tháng 2 năm không nhuận và có ngày là ngày 28 cuối tháng thì ngày tiếp theo sẽ là ngày 1/3/year
 * 3.3 Còn lại thì ngày tiếp theo sẽ là ngày day+1/month/year
 * 3.4 Nếu là tháng 12 và có ngày là ngày 31 cuối tháng thì ngày tiếp theo sẽ là ngày 1/1/year+1
 * 3.5 Nếu không phải là tháng 12 và có ngày là ngày 31 cuối tháng thì ngày tiếp theo sẽ là ngày 1/month+1/year
 * 3.6 Các trường hợp còn lại thì ngày tiếp theo sẽ là ngày day+1/month/year
 * 4. Tính ngày, tháng, năm của ngày trước đó
 * 4.1 Nếu ngày là ngày 1 và là tháng 1 thì ngày trước đó là ngày 31/12/year-1
 * 4.2 Nếu tháng là tháng 3, ngày 1, năm nhuận thì ngày trước đó là ngày 29/2/year
 * 4.3 Nếu tháng là tháng 3, ngày 1, năm không nhuận thì ngày trước đó là ngày 28/2/year
 * 4.4 Nếu là ngày 1 của các tháng 2, tháng 4, tháng 6, tháng 9, tháng 11 thì ngày trước đó là ngày 31/month-1/year
 * 4.5 Ngược lại, nếu là ngày 1 của các tháng 1, tháng 5, tháng 7, tháng 8, tháng 10, tháng 12 thì ngày trước đó là ngày 30/month-1/year
 * 4.6 các trường hợp còn lại thì ngày trước đó là ngày day-1/month/year
 * 5. In kết quả ra màn hình
 *
 * Output: tính ngày, tháng, năm của ngày tiếp theo và ngày trước đó
 */

var day = 25;
var month = 1;
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
