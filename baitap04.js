/**
 * Input: Tên và tọa độ nhà của 3 sinh viên. Tọa độ của trường đại học
 *
 * Process:
 * 1. Lấy thông tin sinh viên và thông tin trường đại học
 * 2. Lần lượt tính khoảng cách từ nhà của sinh viên 1, sinh viên 2, sinh viên 3 đến trường đại học
 * 3. So sánh khoảng cách để tìm ra sinh viên xa trường nhất
 * 4. In kết quả ra màn hình
 *
 * Output: In tên sinh viên xa trường nhất
 */

// Tọa độ sinh viên 1
var student1 = "Nguyễn Văn A";
var x1 = 3;
var y1 = -6;

// Tọa độ sinh viên 2
var student2 = "Trần Văn B";
var x2 = 4;
var y2 = 7;

// Tọa độ sinh viên 3
var student3 = "Lê Thị C";
var x3 = -9;
var y3 = 8;

// Tọa độ trường đại học
var x = 5;
var y = 5;

// Khoảng cách từ nhà sinh viên 1 đến trường đại học
d1 = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));

// Khoảng cách từ nhà sinh viên 2 đến trường đại học
d2 = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));

// Khoảng cách từ nhà sinh viên 3 đến trường đại học
d3 = Math.sqrt((x - x3) * (x - x3) + (y - y3) * (y - y3));

if (d1 > d2 && d1 > d3) {
  console.log("Sinh viên", student1, "xa trường nhất");
} else if (d2 > d3 && d2 > d1) {
  console.log("Sinh viên", student2, "xa trường nhất");
} else {
  console.log("Sinh viên", student3, "xa trường nhất");
}
