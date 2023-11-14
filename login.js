const userNameInput =document.getElementById("user_name")
const passwordInput =document.getElementById("password")
const loginBtn =document.getElementById("login")

loginBtn.addEventListener("click",function() {
    const loginData = {
    userName : userNameInput.value,
    password : passwordInput.value
    
};

console.log(loginData);

});