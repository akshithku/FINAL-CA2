const button=document.getElementById("btn");

btn.onclick=()=>{
    location.href="./game.html";
    const user1=document.getElementById("user1")
    const user2=document.getElementById("user2")
    location.href="./game.html";
    localStorage.setItem("user1",user1.value)
    localStorage.setItem("user2",user2.value)
}