const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirm = document.getElementById("confirmPassword").value;

        if(password !== confirm){
            alert("Passwords do not match.");
            return;
        }

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem("urbanUser", JSON.stringify(user));

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    });

}

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const savedUser = JSON.parse(localStorage.getItem("urbanUser"));

        if(
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ){

            alert("Login Successful!");

            window.location.href = "index.html";

        }
        else{
            alert("Invalid Email or Password");
        }

    });

}