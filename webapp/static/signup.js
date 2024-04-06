function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            window.location.href = "/dashboard";  // Redirect to dashboard after successful signup
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById("signupError").innerText = errorMessage;
        });
}