var messageBtn = document.getElementById('send-message'); 
var checkIcon = document.getElementById('check-icon'); 
console.log(checkIcon);
document.getElementById('contact-form').addEventListener('submit', (e) =>{
    // e.preventDefault(); 
    messageBtn.innerHTML = 'Sent <i id="check-icon" class="fas fa-check-double">'; 
    messageBtn.style.fontSize = '1.2rem'; 




})
