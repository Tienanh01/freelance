// var acc = document.getElementsByClassName("accordion");
// var i;
// for ( i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click",function(){
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if(panel.style.display === "block"){
//             panel.style.display = "none";
//         }
//         else{
//             panel.style.display = "block";
//         }
//     });
// }
var acc = document.getElementsByClassName("accordion"); // tao object Dom
var i;

for (i = 0; i < acc.length; i++) {  // chạy từ độ dài vòng for
  acc[i].addEventListener("click", function() {   // thêm sự kiện khi click cho mỗi đối tượng
    this.classList.toggle("active");          //thêm class active
    var panel = this.nextElementSibling;      // trỏ đến class con của đôi tượng
    if (panel.style.display === "block") {    // 
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
 