// 주석
/* 주석 */
/**이방법 쓰면 자동으로 깔끔하게 나옴! */
function ticketPrice(standard, student){
  let standardPrice = 15000;
  let studentPrice = 8000;

  let totalPrice = standard*standardPrice + student*studentPrice

  return totalPrice;
}
console.log(ticketPrice(3,0));
console.log(ticketPrice(2,2));