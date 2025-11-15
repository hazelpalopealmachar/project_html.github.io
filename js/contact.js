document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let statusMsg = document.getElementById("statusMsg");

  if(name === "" || email === "" || message === ""){
    statusMsg.textContent = "⚠️ Please fill in all fields.";
    statusMsg.style.color = "red";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)){
    statusMsg.textContent = "⚠️ Please enter a valid email.";
    statusMsg.style.color = "red";
    return;
  }

  statusMsg.textContent = "✅ Message sent successfully!";
  statusMsg.style.color = "green";

  document.getElementById("contactForm").reset();
});
