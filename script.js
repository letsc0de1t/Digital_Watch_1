
var hour = document.getElementById("hour");
var min  = document.getElementById("minute");
var sec = document.getElementById("second");
var ampm  = document.getElementById("ampm");


const update = () =>{
   var time = new Date();
   var h = time.getHours();
   var m = time.getMinutes();
   var s = time.getSeconds();

   if(h>=12){
    ampm.innerText = "PM";
   }else{
    ampm.innerText = "AM";
   }

   if(h>12){
        h = h%12;
   }
   hour.innerText = h <10 ? "0"+h : h;
   min.innerText = m <10 ? "0"+m : m;
   sec.innerText = s <10 ? "0"+s:s;
  
}


setInterval(update, 1000)
