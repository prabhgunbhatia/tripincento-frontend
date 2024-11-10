// Get references to the Sign-Up and Log-In sections
const signupSection = document.getElementById("signup");
const loginSection = document.getElementById("login");

// Get the links that toggle between Sign-Up and Log-In
const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");

// Add event listener to the Log-In link
loginLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Hide the Sign-Up section and show the Log-In section
    signupSection.style.display = "none";
    loginSection.style.display = "flex";
});

// Add event listener to the Sign-Up link
signupLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Hide the Log-In section and show the Sign-Up section
    loginSection.style.display = "none";
    signupSection.style.display = "flex";
});
