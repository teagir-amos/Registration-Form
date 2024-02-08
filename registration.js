const usernameA = document.querySelector("#Name");
const emailA = document.querySelector("#Email");
const passwordA = document.querySelector("#Password");
const confirmpasswordA = document.querySelector("#confirm-password");
const form = document.querySelector("#sign-up");

const isEmailValid = (Email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
};

const isPasswordSecure = (Password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(Password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;



const checkUsername = () => {
    let valid = false;
    const min = 3;
    max = 25;
    const Name = usernameA.value.trim();

    if (!isRequired(Name)) {
        alert(usernameA, "Username cannot be blank");
    } else if (!isBetween(Name.length, min, max)) {
        alert(usernameA, `username must be between ${min} and ${max} characters`)
    } else {
        alert(usernameA);
        valid = true;
    }
    return valid;

};

const checkEmail = () => {
    let valid = false;
    const Email = emailA.value.trim();
    if (!isRequired(Email)) {
        alert(emailA, `Email cannot be blank.`)
    } else if (!isEmailValid(Email)) {
        alert(emailA, `Email is not valid.`)
    } else {
        alert(emailA);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;

    const password = passwordA.value.trim();
    if (!isRequired(password)) {
        alert(passwordA, `Password cannot be blank`)
    } else if (!isPasswordSecure(password)) {
        alert(passwordA, `password must have at least 8 characters and include at lest 1 lowercase character`)
    } else {
        alert(passwordA);
        valid = true;
    }
    return valid;
};

const checkconfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmpasswordA.value.trim();
    const Password = passwordA.value.trim();
    if (!isRequired(confirmPassword)) {
        alert(confirmpasswordA, `Please enter the password again`)
    } else if (Password !== confirmPassword) {
        alert(confirmpasswordA, `The password does not match`)
    } else {
        alert(confirmpasswordA)
    }
    return valid;
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault()

    let isUsernameValid = checkUsername();
    isEmailValid = checkEmail();
    isPasswordValid = checkPassword();
    confirmpasswordA = checkconfirmPassword();

    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && confirmpasswordA;
    if (isFormValid) {

    }
});


