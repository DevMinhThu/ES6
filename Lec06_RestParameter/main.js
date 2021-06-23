/* Rest parameter: 
- cho phép ta mở rọng tham số của function tùy ý 
- không giới hạn tham số đầu vào
*/

function tinhTong(...resParameters) {
  let tong = 0;
  for (let i = 0; i < resParameters.length; i++) {
    tong += resParameters[i];
  }
  console.log(tong);
  return tong;
}

// truyền bao nhiêu tham số vào hàm cũng được
tinhTong(1, 2);

tinhTong(1, 2, 3);

tinhTong(1, 2, 3, 4);
