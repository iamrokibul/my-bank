document.getElementById("login_btn").addEventListener("click", function(){
    // Get user email 
    const emailField = document.getElementById("email");
    const userEmail = emailField.value;
    // Get user password 
    const passwordField = document.getElementById("pass");
    const userPassword = passwordField.value;
    
    // Check email & password
    if(userEmail == "test@email.com" && userPassword == "123"){
        window.location.href = "banking.html";
    }else{
        alert("Incorrect username or password!!!");
    }
});