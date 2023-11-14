const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const dateofbirthInput = document.getElementById("date_of_birth");
const genderInput = document.getElementById("gender");
const userNameInput = document.getElementById("user_name");
const passwordInput = document.getElementById("password");
const regBtn = document.getElementById("registration");

regBtn.addEventListener("click", function () {
    const registrationData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        dateofbirth: dateofbirthInput.value,
        gender: genderInput.value,
        userName: userNameInput.value,
        password: passwordInput.value
    };

    console.log(registrationData);
});
