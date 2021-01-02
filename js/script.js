let start = document.getElementById("start");
let minutesPlace = document.querySelector(".minutes");
let secondesPlace = document.querySelector(".secondes");
let done = document.querySelector(".done");
let reset = document.getElementById("reset");
let dots = document.querySelector(".dots");
start.addEventListener("click", function(){
    let timer = document.getElementById("timer").value;
    let secondesPass = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let remsecondes = timer % 60;
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