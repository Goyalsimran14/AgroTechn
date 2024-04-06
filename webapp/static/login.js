function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "/dashboard";  // Redirect to dashboard after successful login
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById("loginError").innerText = errorMessage;
        });
}