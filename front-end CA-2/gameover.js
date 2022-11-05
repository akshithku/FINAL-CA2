const reset=document.getElementById("reset-btn")
reset.onclick=()=>{
    location.href="./game.html";
}

var username=document.getElementById("player");
username.innertext=localStorage.getItem("player");