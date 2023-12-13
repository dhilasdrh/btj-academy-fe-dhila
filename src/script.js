/* ------------- TOGGLE LIGHT/DARK MODE & ANIMATED SECTION ------------- */
window.onload = function () {
    // ---- Mode Switch  ----- //
    const toggleSwitch = document.querySelector('.toggle-switch');
    const hiddenCheckbox = document.getElementById('dark-mode-toggle');

    // Check the local storage for the dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set the initial theme based on the local storage
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    hiddenCheckbox.checked = isDarkMode;

    toggleSwitch.addEventListener('click', () => {
        const isDarkMode = !hiddenCheckbox.checked;
        // Save the dark mode state to local storage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        hiddenCheckbox.checked = isDarkMode;
    });


    // ---- Animated Section ----- //
    const sections = document.querySelectorAll(".animated-section");
    
    // intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // define different animation styles based on section ID
                switch (entry.target.id) {
                    case "section-education":
                    case "section-motto":
                        entry.target.style.animation = "slideInLeft 0.5s ease";
                        entry.target.style.opacity = 1;
                        break;
                    case "section-work":
                        entry.target.style.animation = "slideInRight 0.5s ease";
                        entry.target.style.opacity = 1;
                        break;
                }
            }
        });
    }, { threshold: 0.2 });
    
    // Observe each section
    sections.forEach(function (section) {
        observer.observe(section);
     });
};

/* ------- ROTATE LOGO 360 DEGREE ------ */
document.getElementById('logo-img').addEventListener('click', function() {
    this.style.transitionDuration = '1s';
    this.style.transform += ' rotate(360deg)';
});

/* ------- SHOW PASSWORD CHECKBOX ------ */
function toggleShowPassword() {
    passwordCheckbox = document.getElementById("show-password");
    passwordInput.type = passwordCheckbox.checked ? "text" : "password";
}

/* ---------- LOGIN VALIDATION --------- */
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('error-username');
const passwordError = document.getElementById('error-password');
const capslockWarning = document.getElementsByClassName('capslock-warning')[0];

// variables for user input
let username = "";
let password = "";

// event listeners (input and capslock)
usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('keyup', checkCapsLock);

// validate login 
function validateLogin(e) {
    e.preventDefault();
    validateUsername();
    validatePassword();

    // Check if both username and password are valid
    if (username && isPasswordValid(password)) {
        window.location.href = "about.html";
    } 
}

// Check Capslock
function checkCapsLock(event) {
    const isCapsLockOn = event.getModifierState('CapsLock');
    capslockWarning.style.display = isCapsLockOn ? 'block' : 'none';
}

// Display error input 
function showError(inputElement, errorMessage) {
    const errorContainer = document.getElementById('error-' + inputElement.id);
    
    // update error message and display style
    errorContainer.innerHTML = errorMessage;
    errorContainer.style.display = errorMessage ? 'block' : 'none';

    // add red box shadow if there is an error
    inputElement.style.boxShadow = errorMessage ? '0 0 5px rgba(255, 0, 0, 0.6)' : 'none';
}

// Username Validation
function validateUsername() {
    username = usernameInput.value.trim();
    let errorMessage = username === "" ? "Please fill the username correctly." : "";
    
    showError(usernameInput, errorMessage)
}

// Password Validation
function validatePassword() {
    password = passwordInput.value.trim();
    const isValid = isPasswordValid(password);
    let errorMessage = "";

    if (password === "") {
        errorMessage = "Please fill the password correctly.";
    } else if (!isValid) {
        errorMessage = passwordError.innerHTML;
    }

    showError(passwordInput, errorMessage);
}

// Check Password Validation
function isPasswordValid(password) {
    const conditions = [
        { regex: /[A-Z]/, message: 'one uppercase letter' },
        { regex: /[a-z]/, message: 'one lowercase letter' },
        { regex: /\d/, message: 'one number' },
        { regex: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, message: 'one symbol' }
    ];

    const unmetConditions = conditions.filter(condition => !condition.regex.test(password));

    if (unmetConditions.length > 0) {
        const errorMessage = `Password needs to have ${unmetConditions
            .map(({ message }) => message)
            .join(', ')
            .replace(/,([^,]*)$/, `${unmetConditions.length > 2 ? ', and$1' : ' and$1'}`)}.`;

        passwordError.innerHTML = errorMessage;
        return false;
    } else {
        return true;
    }
}
