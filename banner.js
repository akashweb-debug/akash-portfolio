
document.getElementById("downloadbtn").onclick=function() {
const fileurl="weather data visulaztion.pdf";

    const a=document.createElement("a")
    a.href=fileurl
    a.download="weather data visulaztion project.pdf"

    document.body.appendChild(a);
    a.click();
     document.body.removeChild(a);
  
}
    

 document.getElementById("start").onclick=function() {
window.location="about.html"
 }
function loginform() {
  if (loginpopup) {
document.getElementById("loginpopup").style.display = "none";    
    document.getElementById("page").style.display="block";
  document.getElementById("alert-text3").innerHTML="Waiting for 2sec"
setTimeout(function(){
   window.location="login.html"
}, 2000);

  }
};


window.onload = function () {
  showalert("🚀 Welcome to My Portfolio, I’m Akash – a MERN Stack Developer!");
}

function showalert(message) {
  document.getElementById("custom-alert").style.display = "block";
  document.getElementById("alert-text").innerHTML = message;
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
  

  document.getElementById("loginpopup").style.display = "block";
  document.getElementById("alert-text2").innerHTML = "🔐 Please login to continue.";
}

function cancel() {
  document.getElementById("loginpopup").style.display = "none";
}

document.getElementById("start").onclick=function() {
  document.getElementById("loginpopup").style.display = "none";
  document.getElementById("aboutnext").style.display = "block";
  document.getElementById("alert-text4").innerHTML="waiting next page";
setTimeout(() => {
  window.location="about.html"
}, 2000);
  
};

