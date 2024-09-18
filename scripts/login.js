//Select form by id
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit" , function(event){
    //COLLECT FORM DATA
    event.preventDefault();
    const formData = new FormData(loginForm);
    console.log(
        formData.get("username"),
        formData.get("password")
    );

    //DISPLAY SUCCESS MESSAGE
    const messageH1=document.querySelector("#message");
    messageH1.textContent = "Logged In Successfully";
})