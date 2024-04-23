function validate() {
    let email = document.querySelector("#email");
    let errorIcon = document.querySelector(".error");
    let errorText = document.querySelector(".error-text");
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

   if (!email.value.match(pattern)) {
        errorIcon.classList.add("show");
        errorText.classList.add("show");
        email.style.border = "2px solid hsl(1, 65%, 62%)";
        email.setAttribute("placeholder", ""); 
   } else {
        errorIcon.classList.remove("show"); 
        errorText.classList.remove("show");
        email.style.border = "1px solid green";
   }
}
document.getElementById("email").addEventListener("keyup", validate);
