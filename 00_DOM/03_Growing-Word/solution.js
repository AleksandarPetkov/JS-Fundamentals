function solve() {
   let index = 0;
   let currentPx = 1;
   document.getElementById("exercise").addEventListener("click", function(){
     let arrayColors = ["blue", "green", "red"];

     if(index == 0){
      document.getElementById("exercise").childNodes[5].style.color = arrayColors[index];
      currentPx *= 2;
      document.getElementById("exercise").childNodes[5].style.fontSize = currentPx.toString() + "px";
      index++;
     } else if (index == 1){
      document.getElementById("exercise").childNodes[5].style.color = arrayColors[index];
      currentPx *= 2;
      document.getElementById("exercise").childNodes[5].style.fontSize = currentPx.toString() + "px";
      index++;
     } else if (index == 2){
      document.getElementById("exercise").childNodes[5].style.color = arrayColors[index];
      currentPx *= 2;
      document.getElementById("exercise").childNodes[5].style.fontSize = currentPx.toString() + "px";
      index = 0;
     }
   });

}