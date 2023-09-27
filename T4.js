const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];

document.querySelector(".d2").addEventListener("click", function(){
    let d = new Date();
    document.querySelector(".show-time").innerHTML = d;
});

document.querySelector(".d1").addEventListener("click", function(){
    let d = new Date();
    document.querySelector(".show-date").innerHTML = d.getDate() + "/" + months[d.getMonth()] + "/" + d.getFullYear();
});