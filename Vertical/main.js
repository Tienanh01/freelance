var r = 3.9; var x = 0.8; 
var xi = 0.8;
 var list1 = new Array(); 
list1.push(x); 
var result = 0;
for (let i = 1; i <= 16; i++) 
{ xi = r * x * (1.0 - x); 
    // list1.push(xi);
   xi = take_decimal_number(xi,4);
        x = xi;
    console.log(xi);
    result += xi+" ";
 } 
// console.log(list1);
console.log("0.8 "+result);
//  list1.sort(); 
//  console.log(list1);
    function take_decimal_number(num,n){
        //num : số cần xử lý
        //n: số chữ số sau dấu phẩy cần lấy
        let base = 10**n;
        let result = Math.round(num * base) / base ;
        return result;
    }