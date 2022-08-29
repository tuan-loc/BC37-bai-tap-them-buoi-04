/**
 * Input: Nhập vào số nguyên có 3 chữ số
 *
 * Process:
 * 1. Lấy giá trị của số nguyên vừa nhập
 * 2. Bóc tách 3 kí số của số nguyên vừa nhập
 * 3. Cách đọc số từ 0 đến 9
 * 4. In ra màn hình kết quả
 *
 * Output: In ra cách đọc nó
 */

var number = 758;
var number1 = Math.floor(number / 100);
var number2 = Math.floor((number % 100) / 10);
var number3 = number % 10;

switch (number1) {
  case 0:
    read1 = "Không";
    break;

  case 1:
    read1 = "Một";
    break;

  case 2:
    read1 = "Hai";
    break;

  case 3:
    read1 = "Ba";
    break;

  case 4:
    read1 = "Bốn";
    break;

  case 5:
    read1 = "Năm";
    break;

  case 6:
    read1 = "Sáu";
    break;

  case 7:
    read1 = "Bảy";
    break;

  case 8:
    read1 = "Tám";
    break;

  case 9:
    read1 = "Chín";
    break;

  default:
    break;
}

switch (number2) {
  case 0:
    read2 = "Không";
    break;

  case 1:
    read2 = "Một";
    break;

  case 2:
    read2 = "Hai";
    break;

  case 3:
    read2 = "Ba";
    break;

  case 4:
    read2 = "Bốn";
    break;

  case 5:
    read2 = "Năm";
    break;

  case 6:
    read2 = "Sáu";
    break;

  case 7:
    read2 = "Bảy";
    break;

  case 8:
    read2 = "Tám";
    break;

  case 9:
    read2 = "Chín";
    break;

  default:
    break;
}

switch (number3) {
  case 0:
    read3 = "Không";
    break;

  case 1:
    read3 = "Một";
    break;

  case 2:
    read3 = "Hai";
    break;

  case 3:
    read3 = "Ba";
    break;

  case 4:
    read3 = "Bốn";
    break;

  case 5:
    read3 = "Năm";
    break;

  case 6:
    read3 = "Sáu";
    break;

  case 7:
    read3 = "Bảy";
    break;

  case 8:
    read3 = "Tám";
    break;

  case 9:
    read3 = "Chín";
    break;

  default:
    break;
}

console.log("Cách đọc số:", read1, "Trăm", read2, "Mươi", read3);
