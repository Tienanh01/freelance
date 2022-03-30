function openCity(evt , cityname){
 check();
//  launch();
tabcontent = document.getElementById(cityname);
if(tabcontent.style.display === "none"){
  tabcontent.style.display = "block";
}
}
function check(){
  var i, // Khai báo biến chạy
   
   tabcontent, // Khai báo biến để lấy objectHTML
   tablinks; // Khai báo biến lấy giá trị objectHTML
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) { // Chạy suốt độ dài tabcontent
     tabcontent[i].style.display = "none"; // ẩn tất cả nội dung 
   }

 }
 
