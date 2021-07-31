let arr = [2, 3, 9, -1, 10];

/* 
  a: là giá trị tiếp theo so với giá trị đầu tiên trong mảng
  b: là giá trị trước giá trị đó
*/
const result = arr.sort((a, b) => {
  if (a > b) return 1; // giữ nguyên
  if (a < b) return -1; // đảo vị trí
});

console.log(result);

/* Các cặp so sánh
  3-2
  9-3
  -1-9
  10- -1
  */
