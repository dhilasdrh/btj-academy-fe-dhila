# Task 4 Web Basic (JavaScript)

##   Logo Rotation

Clicking on the logo triggers a 360-degree rotation animation.

    document.getElementById('logo-img').addEventListener('click', function () {
        this.style.transitionDuration = '1s';
        this.style.transform += ' rotate(360deg)';
    });

##  Password Visibility Toggle

A checkbox enables users to toggle password visibility in the input field. This function dynamically changes the password input field's type to either show or hide the entered characters based on the checkbox state.

    function toggleShowPassword() {
            passwordCheckbox = document.getElementById("show-password");
            passwordInput.type = passwordCheckbox.checked ? "text" : "password";
    }

## Login Form Validation

### Event Listeners

The `validateUsername` function is called when there's an 'input' event on the username field, `validatePassword` is called on 'input' events on the password field, and `checkCapsLock` is triggered when the user releases a key ('keyup' event) in the password field

    // event listeners (input and capslock)
	usernameInput.addEventListener('input', validateUsername);
	passwordInput.addEventListener('input', validatePassword);
	passwordInput.addEventListener('keyup', checkCapsLock);

### Validate Login Function (`validateLogin`)

Called when attempting to submit the login form. It prevents the default form submission behavior, validates the username and password, and redirects to a new page if both are valid.

    function validateLogin(e) {
		e.preventDefault();
		validateUsername();
		validatePassword();
	}

### Username Validation Function (`validateUsername`)

Validates the username input, checking if it is empty. Displaying error message and apply red box shadow in the input field if the password not valid.

    function validateUsername() {
	    let username = usernameInput.value.trim();
	    let errorMessage = username === "" ? "Please fill the username correctly." : "";
	    
	    showError(usernameInput, errorMessage)
	}

### Password Validation Function (`validatePassword`) 

Validates the password input, checking if it is empty and if it meets the specified conditions. Displaying error message and red box shadow in the input field if the password not valid.

    // Password Validation
    function validatePassword() {
        let password = passwordInput.value.trim();
        let isValid = isPasswordValid(password);
        let errorMessage = "";

	    if (password === "") {
	        errorMessage = "Please fill the password correctly.";
	    } else if (!isValid) {
	        errorMessage = passwordError.innerHTML;
	    }

	    showError(passwordInput, errorMessage);
	}

### Check Password Validation Function (`isPasswordValid`)

Checks if the password meets certain conditions (at least one uppercase letter, one lowercase letter, one number, and one symbol). Will return error message if the password doesn't meet the criteria.

    function isPasswordValid(password) {
        const conditions = [
            { regex: /[A-Z]/, message: 'one uppercase letter' },
            { regex: /[a-z]/, message: 'one lowercase letter' },
            { regex: /\d/, message: 'one number' },
            { regex: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, message: 'one symbol' }
        ];
        
	// filter conditions that are not met by the password
    const unmetConditions = conditions.filter(condition => !condition.regex.test(password));
	
	// if there are unmet conditions, generate an error message
    if (unmetConditions.length > 0) {
        const errorMessage = `Password needs to have ${unmetConditions
            .map(({ message }) => message)
            .join(', ')
            .replace(/,([^,]*)$/, `${unmetConditions.length > 2 ? ', and$1' : ' and$1'}`)}.`;

        passwordError.innerHTML = errorMessage;
        return false;
	    } else {
		    // if all conditions are met, the password is considered valid
	        return true;
	    }
	}
    
### Check Caps Lock Function (`checkCapsLock`)

Check whether the caps lock key is active and displays a warning if it is.

    // Check Capslock
    function  checkCapsLock(event) {
	    const isCapsLockOn = event.getModifierState('CapsLock');
	    capslockWarning.style.display = isCapsLockOn ? 'block': 'none';
    }


## Dynamic Theming (Toggle Light/Dark Mode)

The application allows users to switch between light and dark modes using a toggle switch. This functionality is stored in local storage, ensuring the preferred mode is retained upon revisits. 

Dark mode  styles are defined under `:root[data-theme="dark"]` to change the color scheme when dark mode is enabled. CSS variables are used for easy theming, allowing for a quick switch between dark and light modes.

	    :root {
	        --primary-color: #4161d3;
	        --secondary-color: #424987;
	        --accent-color: #3cabe1;
	        --highlight-color: #ee741a;
	        --black-color: #333;
	        --main-background-color: #f8f8f8;
	        --box-background-color: #f2f2f2;
	        // ...
	    }
	    
	    /* Dark mode */
	    :root[data-theme="dark"] {
	        --primary-color: #4a90e2;
	        --secondary-color: #4b74e6;
	        --accent-color: #5095cc;
	        // ...
	    }`

The JavaScript code initializes the state based on the value stored in local storage, updates the theme accordingly, and listens for a click event on the toggle switch to toggle between the modes. The state is saved in local storage to persist the user's preference across page reloads.

    window.onload = function () {
        // ---- Mode Switch  ----- //
        const toggleSwitch = document.querySelector('.toggle-switch');
        const hiddenCheckbox = document.getElementById('dark-mode-toggle');
    
        // check local storage for the dark mode preference
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
        // set the initial theme based on the local storage
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        hiddenCheckbox.checked = isDarkMode;
    
        toggleSwitch.addEventListener('click', () => {
            const isDarkMode = !hiddenCheckbox.checked;
            // Save the dark mode state to local storage
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
            hiddenCheckbox.checked = isDarkMode;
        });

## Animations

The page includes animated sections that trigger animation effects when scrolled into view. The animations utilize the Intersection Observer API to detect when elements become visible in the viewport, triggering specific animations like sliding in from the left or right with opacity changes.

Several keyframe animations, such as fadeAnimation, slideHorizontal, slideInLeft, and slideInRight, are defined for various elements.
	    
    .content-container {
	animation: slideHorizontal 0.5s ease-in-out;
	}
 
    .fade-animation {
        opacity: 0;
        animation: fadeAnimation 0.5s ease-in-out forwards;
    }
    
    .animated-section {
        opacity: 0;
        animation: none;
    }
    
    
    /* animation */
    @keyframes fadeAnimation {
        from {
          opacity: 0;
          transform: translateY(20px); 
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
    }
    
    @keyframes slideHorizontal {
        from {
            transform: translateX(-200px);
        }
        to {
            transform: translateX(0px);
        }
    }
            
    @keyframes slideInLeft {
        from {
            transform: translateX(-200px) scale(.2);
        }
        to {
            transform: translateX(0px) scale(1);
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(200px) scale(.2);
        }
        to {
            transform: translateX(0px) scale(1);
        }
    }
    
    @keyframes slideUp {
        0% {
            transform: translateY(5px);
        }
    }

## Media Queries (Responsive Web)

The styling is adjusted for different screen sizes using media queries.

    /* Media Queries */
    @media (max-width: 700px) {
        // Styles for mobile devices with max width 700px
    }
    
    @media (max-width: 850px) {
        // Styles for screens with max width 850px
    }
    
    @media screen and (min-width: 1000px) {
        // Styles for desktop/wide screens
    }

