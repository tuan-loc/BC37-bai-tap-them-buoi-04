/**
 * Input: Nhập vào tháng, năm
 *
 * Process:
 * 1. Lấy thông tin tháng và năm
 * 2. Kiểm tra năm đó có phải năm nhuận hay không, lấy năm đó chia cho 4, không dư là năm nhuận, có dư thì không phải là năm nhuận
 * 3. Kiểm tra ngày của tháng.
 *                  Tháng 1, tháng 3, tháng 5, tháng 7, tháng 8, tháng 10, tháng 12 có 31 ngày
 *                  Tháng 4, tháng 6, tháng 9, tháng 11 có 30 ngày
 *                  Tháng 2 năm nhuận có 29 ngày, tháng 2 năm không nhuận có 28 ngày
 * 4. In kết quả ra màn hình
 *
 * Output: Tháng đó có bao nhiêu ngày
 */

var month = 2;
var year = 2022;
var dayOfMonth = 0;

if (month === 2) {
  if (year % 4 === 0) {
    dayOfMonth = 29;
  } else {
    dayOfMonth = 28;
  }
}

switch (month) {
  case 1:
    dayOfMonth = 31;
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

console.log("Tháng", month, "có", dayOfMonth, "ngày");
