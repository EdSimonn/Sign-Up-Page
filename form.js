document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const terms = document.getElementById("terms").checked;
  
    if (!firstName || !lastName || !email || !dob || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (!terms) {
      alert("You must agree to the Terms and Privacy policy.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  