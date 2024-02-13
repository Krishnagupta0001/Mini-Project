// A simple data structure to store registered users
const registeredUsers = [];

function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('register-container').style.display = 'none';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if the user is registered
    const user = registeredUsers.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.assign("index.html");
        
        // You can redirect to another page here
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function register() {
    const first = document.getElementById('first_name').value;
    const last = document.getElementById('last_name').value;
    const number = document.getElementById('phone_number').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Check if the user is already registered
    const isUserRegistered = registeredUsers.some(user => user.email === email);

    if (isUserRegistered) {
        alert('User with this email and number is already registered. Please login.');
    } else {
        // Register the new user
        registeredUsers.push({first,last,number,email,password });
        alert('Registration successful! You can now login.');
        showLogin();
    }
}
