/* For In
- Mỗi lần duyệt nó sẽ trả về INDEX của mỗi phần tử 
*/

let arrName = ["Thu", "Khiem", "Uyen"];

for (const index in arrName) {
  console.log(index, arrName[index]);
}

/* For Of
- Mỗi lần duyệt nó sẽ trả về VALUE của mảng
*/
for (const item of arrName) {
  console.log(item);
}
