/*
- Khi khai báo VAR.
 */

// biến a được sử dụng trước khi khai báo
a = 10;
console.log(a);
var a = 20;

/*
- Khi khai báo lET.
 */

// sẽ bị lỗi vì sử dụng trước khi khai báo
b = 10;
console.log(b);
let b = 20;

/* 
- Const và Let: 
- sẽ khắc phục lại vấn đề, phải khai báo biến xong mới được sử dụng. 
- Không giống như var, được sử dụng trước khi khai báo.
*/
