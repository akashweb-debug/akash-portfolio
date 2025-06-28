let startingvalue=0;
let endingvalue=20;

let reviews=document.getElementById("review");
let command=document.getElementById("Command");
let star=document.getElementById("star");

const interval=setInterval(() => {
    
reviews.textContent=startingvalue+"+"
command.textContent=startingvalue+"+"
star.textContent=startingvalue+"+"

if (startingvalue===endingvalue) {
    clearInterval(interval)
}
startingvalue++
}, 500);

document.getElementById("review-nextpage").onclick=function () {
    window.location="review.html"
}