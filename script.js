let btn = document.querySelector(".darkmode");

btn.addEventListener("click", () => {
  if (btn.innerHTML === `<i class="uil uil-moon"></i>`) {
    btn.innerHTML = `<i class="uil uil-sun"></i>`;
    btn.style.color = "orange";
    btn.style.backgroundColor = "rgb(43, 43, 43)";
    document.body.classList.add("darkmode");
  } else {
    btn.innerHTML = `<i class="uil uil-moon"></i>`;
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    document.body.classList.remove("darkmode");
  }
});


document.getElementById("composeEmailBtn").addEventListener("click", function() {
 
  
  var email = "jiviteshkanna2003@gmail.com";
 
  var composeUrl = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(email);
  
  window.open(composeUrl, "_blank");
});
