document.querySelector('#btnAdd').onclick = function(){ 
   
   if(document.getElementById("input").value ==""){
    alert("Please enter your task");
   }else{
       document.querySelector('.task').innerHTML +=`
       <div class="taskdetail"> 
       <span id="taskname"> 
       ${document.querySelector('#input').value}
       </span>

       <button class="delete"> 
       <i class='fa fa-remove'></i>
       </button>
       </div>
       `;
   }
   
   var current_tasks = document.querySelectorAll(".delete");  
   for (let i = 0; i <current_tasks.length; i++) {
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        };
       
   }
   var tasks = document.querySelectorAll(".taskdetail");
   for (let i = 0; i < tasks.length; i++) {
       tasks[i].onclick = function(){
           this.classList.toggle("completed");
       }
   }
   document.querySelector("#input").value="";
}
// function myFunction(event) {
//     let unicode= event.which;    
//     if(unicode === 13){
//         document.querySelector('.task').innerHTML +=`
//         <div class="taskdetail"> 
//         <span id="taskname"> 
//         ${document.querySelector('#input').value}
//         </span>
 
//         <button class="delete"> 
//         <i class='fa fa-remove'></i>
//         </button>
//         </div>
//         `;
//     }


//   }