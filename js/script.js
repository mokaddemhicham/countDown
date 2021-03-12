var start = document.getElementById("start");
var minutesPlace = document.querySelector(".minutes");
var secondesPlace = document.querySelector(".secondes");
var done = document.querySelector(".done");
var reset = document.getElementById("reset");
var dots = document.querySelector(".dots");
start.addEventListener("click", function(){
    var timer = document.getElementById("timer").value;
    var secondesPass = setInterval(() => {
        var minutes = Math.floor(timer / 60);
        var remsecondes = timer % 60;
        minutesPlace.innerHTML = minutes;
        secondesPlace.innerHTML = remsecondes;
        if(minutes < 10){
            minutesPlace.innerHTML = "0" + minutes;
        }
        if(remsecondes < 10){
            secondesPlace.innerHTML = "0" + remsecondes;
        }
        reset.addEventListener("click",function(){
            timer = 0;
        });
        if(timer > 0){
            timer--;
            if(timer%2==0){
                dots.style.color = "#fa2121";
            }else{
                dots.style.color = "#aaa";
            }
            done.style.display = "none";
            reset.style.display = "block";
            minutesPlace.style.color = "#fa2121";
            secondesPlace.style.color = "#fa2121";
        } else{
            clearInterval(secondesPass);
            done.style.display = "block";
            reset.style.display = "none";
            minutesPlace.style.color = "#aaa";
            secondesPlace.style.color = "#aaa";
        }
    }, 1000);
});
