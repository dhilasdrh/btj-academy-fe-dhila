# Task 4 Web Basic (JavaScript)

## Key Features

###   Logo Rotation
Clicking on the logo triggers a 360-degree rotation animation.

    document.getElementById('logo-img').addEventListener('click', function () {
        this.style.transitionDuration = '1s';
        this.style.transform += ' rotate(360deg)';
    });

###  Password Visibility Toggle
A checkbox enables users to toggle password visibility in the input field.

    function toggleShowPassword() {
            passwordCheckbox = document.getElementById("show-password");
            passwordInput.type = passwordCheckbox.checked ? "text" : "password";
    }

### Login Form Validation

-   Input fields and event listeners are defined for login form validation.
-   Caps Lock warning is displayed based on the Caps Lock key state.
-   Successful validation redirects the user to another page.

### Dynamic Theming (Toggle Light/Dark Mode)

The application allows users to switch between light and dark modes
   using a toggle switch. This functionality is stored in local storage,
   ensuring the preferred mode is retained upon revisits. 

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

   
### Animated Sections

The page includes animated sections that trigger animation effects when scrolled into view. The animations utilize the Intersection Observer API to detect when elements become visible in the viewport, triggering specific animations like sliding in from the left or right with opacity changes.

### Animations

Several keyframe animations, such as fadeAnimation, slideHorizontal, slideInLeft, and slideInRight, are defined for various elements.


### Media Queries (Responsive Web)

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

