document.addEventListener("DOMContentLoaded", function() {
   let sendButton =
   document.querySelector("button");
   let formMessage =
   document.getElementById("formMessage");
   
   sendButton.addEventListener("click", function(event) {
     event.preventDefault();
     formMessage.textContent = "Thank you,your message has been sent";
     formMessage.style.color = "green";
     formMessage.style.fontweight = "bold";
   });
   
   document.getElementById("changeTextBtn")
.addEventListener("click", function() { document.getElementById("messageArea")
.textContent = "Hello! You clicked the button "; });
   
   const hiddenElements =
   document.querySelectorAll('.hidden');
   
   window.addEventListener('scroll',
   function() {
     hiddenElements.forEach(el => {
       const elementTop =
       el.getBoundingClientRect().top;
       const windowHeight =
       window.innerHeight;
       
       if (elementTop < windowHeight - 50) {
         el.classList.add('show');
       }
     });
   });
});