// Select form by id
const registerForm = document.querySelector("#register-form");



// Handle form submit event
registerForm.addEventListener("submit", function (event) {
   
    event.preventDefault();
    //Collect form data
    const formData = new FormData(registerForm);
    console.log(
        formData.get("username"),
        formData.get("email"),
        formData.get("password")
    );
    // Save user information
    // Send confirmation email
    //DISPLAY SUCCESS MESSAGE
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Account registered succesfully!";

}
)

// AGE VARIABLE
const age = 44;

// SQUARE OF AGE
function squareOfAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}

// const squaredAge = squareAge(45);
// console.log(squaredAge);



//FUNCTION TO GET FULL NAME
function fullName(firstName, lastName) {

    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}

const myFullName = fullName("Michael", "Hammond");
